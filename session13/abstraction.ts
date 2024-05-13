abstract class Employee {
    name:string
    constructor(name:string){
        this.name=name
    }
//khai báo phương thức
    // get Fullname(){
    //     return this.name
    // }
    abstract getFullname():void;
// đối với phương thức trong abstract thì chỉ có tên phương thức, kiểu dữ liệu
// trả về và không có phần body
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
class Student extends Employee{
    private age : number;
    constructor(age:number,name:string){
        super(name);
        this.age=age;
        this.name=name;
    }
    getFullname(): void {
        
    }

}
class Persion {
    name:string;
    constructor(name:string) {
        this.name=name
        
    }
    getFullname(){

    }

}
class Persion extends Persion{
    // nếu triển khai phương thức của class cha thì gọi và overriding(ghi đè phương thức)
}