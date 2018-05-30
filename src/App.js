import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <p>4</p>
              </div>
              <div className="col-md-3">
                <p>4</p>
              </div>
              <div className="col-md-3">
                <p>43</p>
              </div>
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
