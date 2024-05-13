"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return `hình là ${this.name}`;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
    }
}
let rectangle = new Rectangle("hình chữ nhật", 5, 6);
console.log("tên", rectangle.getName());
console.log("kích thước", rectangle.getSize());
