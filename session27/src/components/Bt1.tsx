import React from "react";
innterface Products{
    name:string,
    price:number,
    age:number,

}
export default function Bt1(){

    let fullName:string="minh thu";
    let age:number=25;
    let student ={
        name:"hoa",
        age:20,
        address:"hà nội",
    }
    let numbers:number[]=[1,4,7,9];
    let students:string[]=["thu","ngọc","lan","phương"];
    let products:Product[]=[
        {
            name:"iphone5",
            price:5000,
            id:1
        },
        {
            name:"iphone6",
            price:6000,
            id:2
        },
        {
            name:"iphone7",
            price:7000,
            id:3
        },
    ]
    return (
        <div>
            <p>bài tập 1</p>
            <p>nội dung bài tập 1</p>
            <p>hiển thị fullName : {fullName}</p>
            <p>{fullName} nay năm {age} tuổi!</p>
            <p>Ten{student.name}</p>
            <p>tuoi: {student.age}</p>
            <p>chuyển sang dạng JSON để hiển thị</p>
            <p>{JSON.stringify(student)}</p>
            <p>hiển thị mảng (array)</p>
            {numbers.map((item,index,arr)=>{
                return <li key={index}>{item}</li>
            })}        
            <ul>
            {/*
                STT  Name    Price    ID
                1    iphone5 5000     1
                2    iphone6 6000     2

            */}
            </ul>
            <table border={1}>
                <thead>
                    <tr>
                       <th>STT</th>
                       <th>Tên</th>
                       <th>Giá</th>
                       <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(()=>{
                        return <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.id}</td>
                        </tr>
                    })}
                </tbody>
                <tfoot>

                </tfoot>

            </table>

        </div>
        /*
            khi return các element thì phải có thẻ fragment bọc bên ngoài
        */
    )
}