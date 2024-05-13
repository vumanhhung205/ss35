abstract class Shape {
    name : string;
    constructor(name : string){
        this.name=name
    }
    getName(){
        return `hình là ${this.name}`
    }
    abstract getSize():void
}
class Rectangle extends Shape{
    width: number;
    height: number;
    constructor(name:string,width:number,height:number) {
        super(name);
        this.width=width;
        this.height=height;
        
    }
    getSize(): void {
        
    }
}
let rectangle = new Rectangle("hình chữ nhật",5,6);
console.log("tên",rectangle.getName());
console.log("kích thước",rectangle.getSize());

