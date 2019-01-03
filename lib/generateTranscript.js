let generateTranscript = (info, students) => {
  let ids = info.split('，').map(id => parseInt(id));
  if (ids.every(id => parseInt(id))) {
    let totalScore = getTotalScoreArr(students);
    let scoreLIst = getExistStudentScoreList(ids, students);
    return `成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
${scoreLIst.join('\n')}
========================
全班总分平均数：${computeAverage(totalScore)}
全班总分中位数：${computeMedian(totalScore)}
`
  }
  return -1;
}

let getTotalScoreArr = students => {
  return students.reduce((acc, student) => {
    student.computeTotalScore();
    student.computeAverage();
    acc.push(student.totalScore);
    return acc;
  }, []);
}

let getExistStudentScoreList = (ids, students) => {
  let studentsArr = students.filter(student => ids.includes(student.id));
  return studentsArr.map(student => {
    let courses = student.courses.reduce((acc, current) => {
      acc[current.course] = current.score;
      return acc;
    }, {});
    return `${student.name}|${courses['数学']}|${courses['语文']}|${courses['英语']}|${courses['编程']}|${student.average}|${student.totalScore}`
  });
}

let computeAverage = collection => {
  let sum = collection.reduce((accumulator, current) => accumulator + current);
  return sum / collection.length;
}

let computeMedian = collection => {
  let rank_asc_arr = collection.sort((a, b) => a - b);
  let median_left_sub = Math.floor((rank_asc_arr.length - 1) / 2);
  let median_right_sub = Math.ceil((rank_asc_arr.length - 1) / 2);
  let double_median = rank_asc_arr[median_left_sub] + rank_asc_arr[median_right_sub];
  return double_median / 2;
}

module.exports = generateTranscript;