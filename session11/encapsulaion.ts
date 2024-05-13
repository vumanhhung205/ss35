/*
    cách tạo class
*/
class Student {
    //khai báo thuộc tính
    name:string
    constructor(name:string){
        this.name=name;
    }
    //nơi khai báo các phương thức
}
//instance nghĩa là đi tạo đối tượng từ class
let std1= new Student("minh thu");
// access modifer - phạm vi truy cập
// 3 phạm vi :
// 1.public
// thì bên ngoài có thể truy cập được
// 2.private
//chỉ truy cập được been trong class
// 3.protected
//chỉ tru cập được bên trong class và subclass(class con-kế thừa)