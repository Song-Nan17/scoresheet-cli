let Student = require("./student.js");

let generateNewStudent = info => {
  if (formatStudentInfo(info)) {
    return buildStudentInfo(info);
  }
  return -1;
}

let formatStudentInfo = info => {
  let infoArr = info.split('，');
  if (infoArr.length < 2 || !parseInt(infoArr[1])) {
    return false;
  }
  let coursesArr = infoArr.slice(2).map(ele => ele.split('：'));
  if (coursesArr.some(arr => arr.length !== 2 || !parseInt(arr[1]))) {
    return false;
  }
  return true;
}

let buildStudentInfo = info => {
  let infoArr = info.split('，');
  let coursesArr = infoArr.slice(2).map(ele => ele.split('：'));
  let courses = coursesArr.reduce((acc, current) => {
    acc.push({ course: current[0], score: parseInt(current[1]) });
    return acc;
  }, [])
  return new Student(infoArr[0], parseInt(infoArr[1]), courses);
}

module.exports = generateNewStudent;

