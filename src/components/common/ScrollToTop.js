import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    console.log("Hello this.props", this.props); // log is here
    return this.props.children;
  }
}

ScrollToTop.propTypes = {};

export default withRouter(ScrollToTop);
