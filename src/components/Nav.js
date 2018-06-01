import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "../logo.svg";

function hoverable(WrappedComponent, propName = "hover") {
  return class HoverableComponent extends Component {
    constructor(props) {
      super(props);

      this.state = { hovered: false };
    }

    turnHoverOn() {
      this.setState({ hovered: true });
      console.log("Hello xxxxon", propName); // log is here
    }

    turnHoverOff() {
      this.setState({ hovered: false });
      console.log("Hello turnHoverOff", this.props); // log is here
    }

    render() {
      const props = { [propName]: this.state.hovered, ...this.props };
      return (
        <div
          onMouseEnter={() => this.turnHoverOn()}
          onMouseLeave={() => this.turnHoverOff()}
        >
          <WrappedComponent {...props} />
        </div>
      );
    }
  };
}

class Nav extends Component {
  render() {
    console.log("Hello this.props", this.props); // log is here
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <img className="NavLogo" src={logo} alt="" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

Nav.propTypes = {};

export default hoverable(Nav, "5566");
