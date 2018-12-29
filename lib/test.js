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
console.log(student.average);
console.log(student.totalScore)