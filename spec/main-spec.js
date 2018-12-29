let sinon = require("sinon");
let main = require("../lib/main");
let Student = require("../lib/student.js");
let addStudent = require("../lib/addStudent");
let generateTranscript = require("../lib/generateTranscript");

// describe('main()', () => {

//     it('should display main menu once started', () => {
//         sinon.spy(console, 'log');
//         main();
//         expect(console.log.args.join()).toBe(`1. 添加学生
// 2. 生成成绩单
// 3. 退出
// 请输入你的选择（1～3）：`);
//     });

// });

describe('addStudent()', () => {
    let studentInfo = '张三，101，数学：95，语文：92，英语：93，编程：94';
    let errorStudentInfo = '张三，101，数学：95，语文：qw，英语：93，编程：94';
    it('should get student while input studentInfo is correct', () => {
        let result = addStudent(studentInfo);
        let student = new Student('张三', 101, { math: 95, chinese: 92, english: 93, coding: 94 });
        expect(result).toEqual(student)
    });
    it('should return -1 while input studentInfo is not correct', () => {
        let result = addStudent(errorStudentInfo);
        expect(result).toEqual(-1);
    });
});

describe('generateTranscript()', () => {
    let info = '101，102';
    let errorInfo = '101，asd';
    let inexistentInfo = '101，102，103';
    let student = new Student('张三', 101, { math: 95, chinese: 92, english: 93, coding: 94 });
    let otherStudent = new Student('李四', 102, { math: 90, chinese: 97, english: 91, coding: 89 });
    let students = [student, otherStudent];
    it('should generate transcript while input is correct', () => {
        let result = generateTranscript(info, students);
        expect(result).toBe(`成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
张三|95|92|93|94|93.5|374
李四|90|97|91|89|91.75|367
========================
全班总分平均数：xxx
全班总分中位数：xxx
`);
    });
    it('should ignore student which is inexistent', () => {
        let result = generateTranscript(inexistentInfo, students);
        expect(result).toBe(`成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
张三|95|92|93|94|93.5|374
李四|90|97|91|89|91.75|367
========================
全班总分平均数：xxx
全班总分中位数：xxx
`);
    });
    it('should return -1 while input info is not current', () => {
        let result = generateTranscript(errorInfo, students);
        expect(result).toEqual(-1);
    });
});
