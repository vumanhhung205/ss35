"use strict";
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 10;
    }
    slowDown() {
        if (this.speed >= 10) {
            this.speed -= 10;
        }
    }
    stop() {
        this.speed = 0;
    }
    getInfo() {
        return `Tốc độ hiện tại: ${this.speed} km/h`;
    }
}
const car = new Vehicle(50);
console.log(car.getInfo());
car.speedUp();
console.log(car.getInfo());
car.slowDown();
console.log(car.getInfo());
car.stop();
console.log(car.getInfo());
