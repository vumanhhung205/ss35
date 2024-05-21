import React, { Component } from 'react'
interface Person{
    id:number,
    name: string,
    birthday: string,
    address: string
}
export default class B2 extends Component<any,Person> {
    constructor(props:Person){
        super(props)
        this.state = {
            id: 1,
            name: "vu manh hung",
            birthday: "11/02/2005",
            address: "nhà"
        }
    }
  render() {
    return (
        <>
            B2:
            <div>
                Họ và tên: {this.state.id} <br />
                Họ và tên: {this.state.name} <br />
                Họ và tên: {this.state.birthday} <br />
                Họ và tên: {this.state.address}
            </div>
        </>
    )
  }
}