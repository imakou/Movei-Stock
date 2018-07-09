import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/social.css";
import Home from "./containers/Home";
import MovieDetail from "./containers/MovieDetail";
import Member from "./containers/Member";
import Nav from "./containers/Nav";
import Search from "./containers/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Nav name={"aallen"} />
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={MovieDetail} />
            <Route exact path="/member" component={Member} />
            <Route exact path="/search/:keyWord?" component={Search} />
          </Switch>
          <footer className="bg-info">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <p>Hello World.</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
