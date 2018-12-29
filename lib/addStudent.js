let Student = require("./student.js");

let addStudent = info => {
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
  let courcesArr = infoArr.slice(2).map(ele => ele.split('：'));
  if (courcesArr.some(arr => arr.length !== 2 || !parseInt(arr[1]))) {
    return false;
  }
  return true;
}

let buildStudentInfo = info => {
  let infoArr = info.split('，');
  let courcesArr = infoArr.slice(2).map(ele => ele.split('：'));
  let cources = courcesArr.reduce((acc, current) => {
    switch (current[0]) {
      case "数学":
        acc.math = parseInt(current[1]);
        break;
      case "语文":
        acc.chinese = parseInt(current[1]);
        break;
      case "英语":
        acc.english = parseInt(current[1]);
        break;
      case "编程":
        acc.coding = parseInt(current[1]);
        break;
    }
    return acc;
  }, {})
  return new Student(infoArr[0], parseInt(infoArr[1]), cources);
}
module.exports = addStudent;

