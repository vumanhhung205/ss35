import React from 'react'
import Bbt6 from './Bbt6'
export default function bt6() {
    const user = [
        {id:1,name:'Nguyễn Gia Thiều',address:'Nam Định',email:"ngt@gmail.com"},
        {id:2,name:'Nguyễn Gia Vải',address:'Nam Định',email:"ngt@gmail.com"},
    ]
  return (
      <div>b6:
          <Bbt6 users={user}></Bbt6>
    </div>
  )
}