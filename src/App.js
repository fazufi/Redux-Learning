import React, { Component } from "react";
import { CTambahDalamFileApp, CTambahLuarFileApp } from "./store";


export default class App extends Component {
  onChange = (e) => {
    e.target.name === "nama" && this.props.gantiNama(e.target.value);
    e.target.name === "rumah" && this.props.gantiRumah(e.target.value);
  };
  render() {
    console.log("app", this.props);
    return (
      <div>
        <h1>{this.props.nama}</h1>
        <h1>{this.props.rumah}</h1>
        <input name="nama" onChange={this.onChange} />
        <input name="rumah" onChange={this.onChange} />


        <CTambahDalamFileApp />
        <CTambahLuarFileApp />
      </div>
    );
  }
}

export class TambahDalamFileApp extends Component {
  render() {
    console.log("TambahDalamFileApp", this.props);
    return (
      <div>
        <h1>TambahDalamFileApp</h1>
      </div>
    );
  }
}


