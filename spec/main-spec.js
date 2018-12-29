let sinon = require("sinon");
let main = require("../lib/main");
let Student = require("../lib/student.js");
let addStudent = require("../lib/addStudent");

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