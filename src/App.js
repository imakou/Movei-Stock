import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <section className="AppJumbotron d-flex align-items-end justify-content-center">
          <div className="AppDescription">
            <div className="container ">
              <div className="row ">
                <div className="col-7">
                  <h1>gggggg</h1>
                  <p>
                    This method is like _.difference except that it accepts iteratee which is invoked for
                    each element of array and values to generate the criterion by which they're compared.
                    The order and references of result values are determined by the first array. The
                    iteratee is invoked with one argument: (value).
                  </p>
                </div>
                <div className="col-5 pb-5 d-flex align-items-end justify-content-center">
                  <button type="button" className="btn btn-success">
                    Trailer
                  </button>
                  <button type="button" className="ml-3 btn btn-outline-success">
                    Detail
                  </button>
                  <button type="button" className="ml-3 btn btn-outline-primary">
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row ">
            <div className="col-3">
              <div className="border shadow-sm">
                <img
                  className="img-fluid"
                  src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg"
                  alt=""
                />
                <div className="p-5 d-flex justify-content-around">
                  <div>1234</div>
                  <div class="badge badge-pill badge-info">Info</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="border">1234</div>
            </div>
            <div className="col-3">
              <div className="border">1234</div>
            </div>
            <div className="col-3">
              <div className="border">1234</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
