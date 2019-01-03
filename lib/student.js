class Student {
  constructor(name, id, courses) {
    this.name = name;
    this.id = id;
    this.courses = courses;
  }
  computeTotalScore() {
    this.totalScore = this.courses.reduce((acc, current) => acc + parseInt(current.score), 0);
  }
  computeAverage() {
    this.average = this.totalScore / this.courses.length;
  }
}

module.exports = Student;
