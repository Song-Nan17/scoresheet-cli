let generateTranscript = (info, students) => {
  let ids = info.split('，').map(id => parseInt(id));
  if (ids.every(id => parseInt(id))) {
    let totalScore = students.reduce((acc, student) => {
      student.computeAverageAndTotalScore();
      acc.push(student.totalScore);
      return acc;
    }, []);
    let studentsArr = students.filter(student => ids.includes(student.id));
    let scoreLIst = studentsArr.map(student => {
      return `${student.name}|${student.cources.math}|${student.cources.chinese}|${student.cources.english}|${student.cources.coding}|${student.average}|${student.totalScore}`;
    });
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