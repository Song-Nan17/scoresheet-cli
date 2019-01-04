let generateTranscript = (input, students) => {
  if (checkInputFormat(input)) {
    return buildTranscript(input, students);
  }
  return -1;
}

let checkInputFormat = input => input.split('，').every(ele => parseInt(ele));

let buildTranscript = (input, students) => {
  let ids = input.split('，').map(id => parseInt(id));
  let existStudents = students.filter(student => ids.includes(student.id));
  let courseNames = Object.keys(existStudents[0].courses);
  let scoreStrings = getScoreStrings(existStudents, courseNames);
  return printTranscript(courseNames, scoreStrings, students);
}

let getScoreStrings = (existStudents, courseNames) => {
  return existStudents.map(student => {
    let scoreString = courseNames.reduce((str, current) => str + student.courses[current] + '|', '');
    return `${student.name}|${scoreString}${student.average}|${student.totalScore}`
  });

}

let printTranscript = (courseNames, scoreStrings, students) => {
  return `成绩单
姓名|${courseNames.join('|')}|平均分|总分 
========================
${scoreStrings.join('\n')}
========================
全班总分平均数：${computeAverage(students)}
全班总分中位数：${computeMedian(students)}
`
}

let computeAverage = students => {
  let sum = students.reduce((sum, current) => sum + current.totalScore, 0);
  return sum / students.length;
}

let computeMedian = students => {
  let totalScores = students.map(student => student.totalScore);
  let rankAscArr = totalScores.sort((a, b) => a - b);
  let medianLeftSub = Math.floor((rankAscArr.length - 1) / 2);
  let medianRightSub = Math.ceil((rankAscArr.length - 1) / 2);
  let doubleMedian = rankAscArr[medianLeftSub] + rankAscArr[medianRightSub];
  return doubleMedian / 2;
}


module.exports = generateTranscript;