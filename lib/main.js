let Student = require("./student.js");
let generateNewStudent = require("./generateNewStudent");
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
      return main();
    case 2:
      toGenerateTranscript();
      return main();
    case 3:
      break;
    default:
      return main();
  }
}

let toAddStudent = () => {
  const inputHint = `请输入学生信息（格式：姓名, 学号, 学科: 成绩, ...），按回车提交：`;
  const correctInputHint = `请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：`;
  let input = cli.question(inputHint);
  while (generateNewStudent(input) === -1) {
    input = cli.question(correctInputHint);
  }
  students.push(generateNewStudent(input));
  console.log(`学生${generateNewStudent(input).name}的成绩被添加`);
}

let toGenerateTranscript = () => {
  const inputHint = `请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`;
  const correctInputHint = `请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`;
  let input = cli.question(inputHint);
  while (generateTranscript(input, students) === -1) {
    input = cli.question(correctInputHint);
  }
  console.log(generateTranscript(input, students));
}
module.exports = main;