"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
// Kiểm tra
const circle = new Circle(5);
console.log("Diện tích hình tròn:", circle.calculateArea());
console.log("Chu vi hình tròn:", circle.calculatePerimeter());
const rectangle = new Rectangle(3, 4);
console.log("Diện tích hình chữ nhật:", rectangle.calculateArea());
console.log("Chu vi hình chữ nhật:", rectangle.calculatePerimeter());
