import React, { Component } from "react";
import { connect } from "react-redux";
import { createStore } from "redux";
import Satu, { Dua, Tiga } from "./Tambah";

class Semua extends Component {
  render() {
    console.log("semua", this.props);
    return (
      <div>
        <CCobaProps />
        <CApp />
        <CSatu />
        <CDua />
        <CTiga />
      </div>
    );
  }
}

class CobaProps extends Component {
  render() {
    console.log("cobaprops", this.props);
    return (
      <div>
        <h1>siji</h1>
      </div>
    );
  }
}
class App extends Component {
  render() {
    console.log("app", this.props);
    return (
      <div>
        <h1>{this.props.nama}</h1>
      </div>
    );
  }
}

// GAWE STORE

const State = {
  nama: "Fazufi",
  rumah: "Solo",
};

function Reduser(STATE = State) {
  return STATE;
}

export const store = createStore(
  Reduser
);


const mapStateToProps = (STATE) => {
  return {...STATE };
};


export const CSemua = connect(mapStateToProps)(Semua);
const CApp = connect(mapStateToProps)(App);
const CCobaProps = connect(mapStateToProps)(CobaProps);
const CSatu = connect(mapStateToProps)(Satu);
const CDua = connect(mapStateToProps)(Dua);
const CTiga = connect(mapStateToProps)(Tiga);
