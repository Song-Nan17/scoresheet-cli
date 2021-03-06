let sinon = require("sinon");
let main = require("../lib/main");
let Student = require("../lib/student.js");
let generateNewStudent = require("../lib/generateNewStudent");
let generateTranscript = require("../lib/generateTranscript");


describe('generateNewStudent()', () => {
    let studentInfo = '张三，101，数学：95，语文：92，英语：93，编程：94';
    let errorStudentInfo = '张三，101，数学：95，语文：qw，英语：93，编程：94';
    it('should get student while input studentInfo is correct', () => {
        let result = generateNewStudent(studentInfo);
        let student = new Student('张三', 101, { '数学': 95, '语文': 92, '英语': 93, '编程': 94 });
        expect(result).toEqual(student)
    });
    it('should return -1 while input studentInfo is not correct', () => {
        let result = generateNewStudent(errorStudentInfo);
        expect(result).toEqual(-1);
    });
});

describe('generateTranscript()', () => {
    let info = '101，102';
    let errorInfo = '101，asd';
    let inexistentInfo = '101，102，104';
    let student = new Student('张三', 101, { '数学': 95, '语文': 92, '英语': 93, '编程': 94 });
    let otherStudent = new Student('李四', 102, { '数学': 90, '语文': 97, '英语': 91, '编程': 89 });
    let thirdStudent = new Student('王五', 103, { '数学': 89, '语文': 92, '英语': 94, '编程': 88 });
    let students = [student, otherStudent, thirdStudent];
    it('should generate transcript while input is correct', () => {
        let result = generateTranscript(info, students);
        expect(result).toBe(`成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
张三|95|92|93|94|93.5|374
李四|90|97|91|89|91.75|367
========================
全班总分平均数：368
全班总分中位数：367
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
全班总分平均数：368
全班总分中位数：367
`);
    });
    it('should return -1 while input info is not current', () => {
        let result = generateTranscript(errorInfo, students);
        expect(result).toEqual(-1);
    });
});
