let Student = require("./student.js");
let addStudent = require("./addStudent");
let generateTranscript = require("./generateTranscript");
let cli = require("cli-interact");
let students = [];
let main = () => {

  let choice = cli.question(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
  choice = parseInt(choice);
  switch (choice) {
    case 1:
      toAddStudent();
      break;
    case 2:
      toGenerateTranscript();
      break;
    case 3:
      break;
    default:
      return main();
  }
}

let toAddStudent = () => {
  let info = cli.question(`请输入学生信息（格式：姓名, 学号, 学科: 成绩, ...），按回车提交：`);
  while (addStudent(info) === -1) {
    info = cli.question(`请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：`);
  }
  students.push(addStudent(info));
  console.log(`学生${addStudent(info).name}的成绩被添加`);
  return main();
}

let toGenerateTranscript = () => {
  let idInfo = cli.question(`请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`);
  while (generateTranscript(idInfo, students) === -1) {
    idInfo = cli.question(`请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`)
  }
  console.log(generateTranscript(idInfo, students));
  return main();
}
module.exports = main;