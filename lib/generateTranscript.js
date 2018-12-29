let generateTranscript = (info, students) => {
  let ids = info.split('，').map(id => parseInt(id));
  if (ids.every(id => parseInt(id))) {
    let scoreLIst = generateScoreList(ids, students);
    return `成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
${scoreLIst.join('\n')}
========================
全班总分平均数：xxx
全班总分中位数：xxx
`
  }
  return -1;
}

let generateScoreList = (ids, students) => {
  return students.reduce((acc, student) => {
    if (ids.includes(student.id)) {
      student.computeAverageAndTotalScore();
      acc.push(`${student.name}|${student.cources.math}|${student.cources.chinese}|${student.cources.english}|${student.cources.coding}|${student.average}|${student.totalScore}`)
    }
    return acc;
  }, []);
}
module.exports = generateTranscript;