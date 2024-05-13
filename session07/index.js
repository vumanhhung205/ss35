"use strict";
/*
    1.array
*/
let numbers = [1, 2, 3, 4];
//khai báo mảng numbers các phần tử trong mảng number phải la  number
let students = ["hoa", "hồng", "huệ"];
/*
    2.object
*/
let obj = {
    name: "minh thu",
    address: "hn",
    id: 1
};
let obj1 = {
    name: "minh thu",
    address: "hcm",
    id: 15,
};
/*
    3.ENUM
*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
let person = {
    name: "ngọc",
    address: "hn",
    role: 0
};
/*
    void: áp dụng với function
    -khi hàm không trả về kết quả gì?
    -khi hàm trả về kết qur thì phải khai báo kiểu duwx liệu trả về của hàm
*/
function sayHello() {
    console.log("hello");
}
sayHello();
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));
/*
5.kiểu unknown
    tương tự kiểu dữ liệu any nhưng chặt hơn
    khi dùng any thi kiểu dữ liệu truyền vào là gì cũng được
*/
function test(a) {
    console.log(a.toUpperCase());
}
test("h");
function test1(a) {
    //bắt buộc phải kiểm tra kiểu dữ liệu trước khi  thực hiệ phép tính
    console.log(11111, typeof (a));
    if (typeof (a) === "string") {
        console.log(a.toUpperCase);
    }
}
test1("text");
/*
     6.type never
*/
function typeNever() {
    let a = 1;
    while ()
        ;
}
