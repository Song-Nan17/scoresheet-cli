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

module.exports = Student;
