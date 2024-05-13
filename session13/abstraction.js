"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
}
// cách khởi tạo đối tượng abstraction
// thêm tù khóa abstract vào đầu class
// intance:
// let emp1 = new Employee("hung");
// emp1 được gọi là 1 intance của class Emloyee
// đối với abstraction thì không cho phép tạo đối tượng (intance)
/*
    tạo 1 class con kế thừa class Employee
    implement : triển khai
    băt buộc phải triển khai tất cả các phương thức của class cha
*/
class Student extends Employee {
    constructor(age, name) {
        super(name);
        this.age = age;
        this.name = name;
    }
    getFullname() {
    }
}
class Persion {
    constructor(name) {
        this.name = name;
    }
    getFullname() {
    }
}
class Persion extends Persion {
}
