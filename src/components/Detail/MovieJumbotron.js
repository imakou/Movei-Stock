import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Vibrant from "node-vibrant";
import MovieContent from "./MovieContent";
import MovieTrailers from "./MovieTrailers";
import { shuffle } from "lodash";
import { Rate } from "antd";

class MovieJumbotron extends Component {
  state = {
    BGColor: ""
  };
  componentDidMount() {
    const { currentMoive } = this.props;

    Vibrant.from(
      `https://image.tmdb.org/t/p/w1400_and_h450_face${currentMoive.backdrop_path}`
    )
      .getSwatches()
      .then(palette => {
        this.setState({ BGColor: `${palette.DarkMuted.getRgb()}` });
      });
  }

  render() {
    console.log("Hello currentMoive", this.props.currentMoive); // log is here
    const { currentMoive } = this.props;
    const trailerData = shuffle(currentMoive.videos).slice(0, 3);
    const rate = () => {
      let n = currentMoive.vote_average * 0.5;
      let integer = Math.floor(n);
      var decimal = n - Math.floor(n);
      if (decimal >= 0.5) {
        decimal = 0.5;
      } else {
        decimal = 0;
      }
      return integer + decimal;
    };

    return (
      <React.Fragment>
        <section
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w1400_and_h450_face${
              currentMoive.backdrop_path
            }")`
          }}
          className="AppJumbotron d-flex align-items-stretch position-relative"
        >
          <div
            className="w-100 MovieDetailJumbotronMask"
            style={{ backgroundColor: `rgba(${this.state.BGColor}, 0.8)` }}
          />
          <div className="container MovieDetailJumbotron">
            <div className="row">
              <div className="col-md-4 col-sm-12 p-4">
                <img
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${
                    currentMoive.poster_path
                  }`}
                  alt=""
                />
              </div>
              <div className="col-md-8 col-sm-12 p-4 d-flex flex-column justify-content-between">
                <div className="row">
                  <div className="col-md-12 ">
                    <h3>{currentMoive.title}</h3>
                    <h6 className="font-weight-light">{currentMoive.release_date}</h6>
                    <div className="mb-3">
                      <Rate disabled allowHalf={true} value={rate()} />
                    </div>
                    <p>{currentMoive.overview}</p>
                  </div>
                </div>
                <div className="row align-self-start">
                  <div className="col-12">
                    <h4>Trailers</h4>
                    <div className="row">
                      <MovieTrailers data={trailerData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MovieContent currentMoive={currentMoive} />
      </React.Fragment>
    );
  }
}

MovieJumbotron.propTypes = {};

export default MovieJumbotron;
