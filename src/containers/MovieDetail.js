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
          className="AppJumbotron d-flex align-items-stretch position-relative"
        >
          <div
            className="w-100 MovieDetailJumbotronMask"
            style={{ backgroundColor: "rgba(46, 85, 81, 0.8)" }}
          />
          <div className="container MovieDetailJumbotron">
            <div className="row">
              <div className="col-md-4 col-sm-12 p-4">
                <img
                  className="img-fluid"
                  src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ufoGrTRbItHvqk42yNHcyoE0afM.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-8 col-sm-12 p-4">
                <h3>Supergirl</h3>
                <h4>Overview</h4>
                <p>
                  Twenty-four-year-old Kara Zor-El, who was taken in by the Danvers family
                  when she was 13 after being sent away from Krypton, must learn to
                  embrace her powers after previously hiding them. The Danvers teach her
                  to be careful with her powers, until she has to reveal them during an
                  unexpected disaster, setting her on her journey of heroism.
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

MovieDetail.propTypes = {};

export default MovieDetail;
