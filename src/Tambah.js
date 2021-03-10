import React, { Component } from 'react'

export default class Satu extends Component {
  render() {
    console.log("satu", this.props)
    return (
      <div>
        <p>satu</p>
        
      </div>
    )
  }
}



export  class Dua extends Component {
  render() {
    console.log("dua", this.props)

    return (
      <div>
        <p>dua</p>
      </div>
    )
  }
}



export  class Tiga extends Component {
  render() {
    console.log("tiga", this.props)

    return (
      <div>
        <p>tiga</p>
      </div>
    )
  }
}

