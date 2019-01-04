let Student = require("./student.js");

let generateNewStudent = input => {
  if (checkInputFormat(input)) {
    return buildStudentInfo(input);
  }
  return -1;
}

let checkInputFormat = input => {
  let inputArr = input.split('，');
  if (inputArr.length < 2 || !parseInt(inputArr[1])) {
    return false;
  }
  let coursesArr = inputArr.slice(2).map(ele => ele.split('：'));
  if (coursesArr.some(arr => arr.length !== 2 || !parseInt(arr[1]))) {
    return false;
  }
  return true;
}

let buildStudentInfo = input => {
  let inputArr = input.split('，');
  let coursesArr = inputArr.slice(2).map(ele => ele.split('：'));
  let courses = coursesArr.reduce((acc, current) => {
    acc[current[0]] = parseInt(current[1]);
    return acc;
  }, {})
  return new Student(inputArr[0], parseInt(inputArr[1]), courses);
}

module.exports = generateNewStudent;

