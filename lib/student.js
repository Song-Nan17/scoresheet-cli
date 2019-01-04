class Student {
  constructor(name, id, courses) {
    this.name = name;
    this.id = id;
    this.courses = courses;
    this.totalScore = this.computeTotalScore();
    this.average = this.computeAverage();
  }
  computeTotalScore() {
    return Object.values(this.courses).reduce((acc, current) => acc + parseInt(current));
  }
  computeAverage() {
    return this.totalScore / Object.values(this.courses).length;
  }
}

module.exports = Student;
