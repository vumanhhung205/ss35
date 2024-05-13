/*
    1.array
*/
let numbers:number[]=[1,2,3,4]
//khai báo mảng numbers các phần tử trong mảng number phải la  number
let students:string[]=["hoa","hồng","huệ"];
/*
    2.object
*/
let obj={
    name:"minh thu",
    address:"hn",
    id:1
}
let obj1:{
    name:string,
    address:string,
    id:number
}={
    name:"minh thu",
    address:"hcm",
    id:15,
}

/*
    3.ENUM
*/
enum Role {
    ADMIN,
    USER
}
let person:{
    name:string,
    address:string,
    role:Role.ADMIN
}={
    name:"ngọc",
    address:"hn",
    role:0
}
/*
    void: áp dụng với function
    -khi hàm không trả về kết quả gì?
    -khi hàm trả về kết qur thì phải khai báo kiểu duwx liệu trả về của hàm
*/
    function sayHello():void{
        console.log("hello");
        
    }
    sayHello();
    function sum(a:number,b:number){
        return a+b
    }
    console.log(sum(3,5));
    /*
    5.kiểu unknown
        tương tự kiểu dữ liệu any nhưng chặt hơn
        khi dùng any thi kiểu dữ liệu truyền vào là gì cũng được
    */
   function test(a:any){
    console.log(a.toUpperCase());
    
   }
   test("h")
   function test1(a:unknown){
    //bắt buộc phải kiểm tra kiểu dữ liệu trước khi  thực hiệ phép tính
    console.log(11111,typeof(a));
    if (typeof(a)==="string") {
        console.log(a.toUpperCase);
    }
   }
   test1("text");

   /*
        6.type never
   */
  function typeNever():never{
    let a:number=1:
    while
  }

    
   