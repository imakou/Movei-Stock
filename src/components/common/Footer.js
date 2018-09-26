import React, { Component } from "react";
import { Icon } from "antd";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footerContainer">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center p-3">
                <span className="d-block mb-2">© 2018 Allen Kou.</span>
                <span className="d-block">
                  API BY{" "}
                  <a target="_blank" rel="noopener noreferrer" href="https://www.themoviedb.org/">
                    Themoviedb
                  </a>{" "}
                  👍👍👍
                </span>
                <span className="d-block mt-2">
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/imakou/Movei-Stock">
                    <Icon style={{ fontSize: "22px" }} type="github" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
