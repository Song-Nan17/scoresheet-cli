class Student {
  constructor(name, id, cources) {
    this.name = name;
    this.id = id;
    this.cources = cources;
  }
  computeAverageAndTotalScore() {
    let scoreArr = Object.values(this.cources);
    this.totalScore = scoreArr.reduce((acc, current) => acc + current);
    this.average = this.totalScore / scoreArr.length;
  }
}

let student = new Student('张三', 101, { math: 95, chinese: 92, english: 93, coding: 94 });
student.computeAverageAndTotalScore();
console.log(student.average)
let otherStudent = new Student('李四', 102, { math: 90, chinese: 97, english: 91, coding: 89});
let students = [student, otherStudent];
let info = '101，102';
let generateTranscript = (info, students) => {
  let ids = info.split('，').map(id => parseInt(id));
  let scoreLIst = students.reduce((acc, student) => {
    if (ids.includes(student.id)) {
      student.computeAverageAndTotalScore();
      acc.push(`${student.name}|${student.cources.math}|${student.cources.chinese}|${student.cources.english}|${student.cources.coding}|${student.average}|${student.totalScore}|`)
      // acc.push(student.average);
    }
    return acc;
  }, []);
  return `成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
${scoreLIst.join('\n')}
========================
全班总分平均数：xxx
全班总分中位数：xxx
`
}
console.log(generateTranscript(info,students));