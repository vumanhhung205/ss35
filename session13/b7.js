"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
class Classroom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    showStudents() {
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach(student => {
            console.log(`- ID: ${student.getId()}, Name: ${student.getName()}`);
        });
    }
}
const allStudents = [
    new Student(1, "hung"),
    new Student(2, "duc"),
    new Student(3, "duong"),
    new Student(4, "huy"),
    new Student(5, "bao"),
    new Student(6, "dung"),
];
const class1 = new Classroom();
const class2 = new Classroom();
for (let i = 0; i < 3; i++) {
    class1.addStudent(allStudents.pop());
    class2.addStudent(allStudents.pop());
}
console.log("Lớp 1:");
class1.showStudents();
console.log("\nLớp 2:");
class2.showStudents();
