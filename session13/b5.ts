interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    speedUp(): void {
        this.speed += 10;
    }

    slowDown(): void {
        if (this.speed >= 10) {
            this.speed -= 10;
        }
    }

    stop(): void {
        this.speed = 0;
    }

    getInfo(): string {
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
