import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Vibrant from "node-vibrant";

class MovieDetail extends Component {
  render() {
    console.log("Hello this.props", this.props); // log is here
    Vibrant.from(
      "https://image.tmdb.org/t/p/w1400_and_h450_face/gBmrsugfWpiXRh13Vo3j0WW55qD.jpg"
    ).getPalette((err, palette) => console.log("palette", palette));
    return (
      <React.Fragment>
        <section
          style={{
            backgroundImage:
              'url("https://image.tmdb.org/t/p/w1400_and_h450_face/gBmrsugfWpiXRh13Vo3j0WW55qD.jpg")'
          }}
          className="AppJumbotron d-flex align-items-stretch"
        >
          <div className="w-100" style={{ backgroundColor: "rgba(46, 85, 81, 0.8)" }} />
        </section>
        <div className="container MovieDetailJumbotron">
          <h1>333</h1>
        </div>
      </React.Fragment>
    );
  }
}

MovieDetail.propTypes = {};

export default MovieDetail;
