import React from "react"

export default function Bt2(){
    let listCoures:string[] =["HTML","CSS","JavaScript","ReactJs"]
    return(
        <div>
            <h1>Bài 1</h1>
            <h3>Danh sách khóa học</h3>
            <ul>
                {listCoures.map((item,index,array)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}