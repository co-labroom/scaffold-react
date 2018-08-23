import React, { Component } from "react";
import logo from "assets/imgs/logo.svg";
import "./Index.scss";

class Index extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <style jsx>{`
          @import "../assets/styles/_variable.scss";

          .App-intro {
            color: $primary-color;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
