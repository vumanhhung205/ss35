import React, { Component } from 'react'
interface Person{
    name: string
}
export default class B1 extends Component<any,Person> {
    constructor(props:Person){
        super(props)
        this.state = {
            name:"vu manh hung"
        }
    }
  render() {
    return (
        <>
            B1:
            <div>
                Họ và tên: {this.state.name}
            </div>
        </>
    )
  }
}