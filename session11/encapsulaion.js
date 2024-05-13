"use strict";
/*
    cách tạo class
*/
class Student {
    constructor(name) {
        this.name = name;
    }
}
//instance nghĩa là đi tạo đối tượng từ class
let std1 = new Student("minh thu");
// access modifer - phạm vi truy cập
// 3 phạm vi :
// 1.public
// thì bên ngoài có thể truy cập được
// 2.private
//chỉ truy cập được been trong class
// 3.protected
//chỉ tru cập được bên trong class và subclass(class con-kế thừa)
