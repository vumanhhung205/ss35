/*
    1.union : kiểu kết hợp

    2.intersection : kiểu kết hợp & 
*/

let b:number | string | undefined=5;
b="hồng";
// tham chiếu (array);
let numberss: (number|string)[]=[1,2,3,4,5,]
// 
let objj:{name:string,address:string,phone:string}={
    name:"hoa",
    address:"hn",
    phone:"12345678910"
}
type A={
    name:string,
    address:string,
    phone:string
}
type B={
    email:string,

}
type C 