class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

class Classroom {
    private students: Student[];

    constructor() {
        this.students = [];
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    showStudents(): void {
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach(student => {
            console.log(`- ID: ${student.getId()}, Name: ${student.getName()}`);
        });
    }
}

const allStudents: Student[] = [
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
    class1.addStudent(allStudents.pop()!);
    class2.addStudent(allStudents.pop()!);
}

console.log("Lớp 1:");
class1.showStudents();

console.log("\nLớp 2:");
class2.showStudents();
