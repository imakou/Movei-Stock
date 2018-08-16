import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Vibrant from "node-vibrant";
import MovieContent from "./MovieContent";
import MovieTrailers from "./MovieTrailers";
import { shuffle } from "lodash";
import { Rate, Icon, Button } from "antd";
import { getRate } from "../../_utils";

class MovieIndex extends Component {
  state = {
    BGColor: ""
  };
  componentDidMount() {
    const { currentMovie } = this.props;

    Vibrant.from(
      `https://image.tmdb.org/t/p/w1400_and_h450_face${currentMovie.backdrop_path}`
    )
      .getSwatches()
      .then(palette => {
        this.setState({ BGColor: `${palette.DarkMuted.getRgb()}` });
      });
  }

  render() {
    console.log("Hello currentMovie", this.props.currentMovie); // log is here
    const { currentMovie } = this.props;
    const trailerData = shuffle(currentMovie.videos).slice(0, 3);
    const backdrop_path = currentMovie.backdrop_path
      ? `https://image.tmdb.org/t/p/w1400_and_h450_face${currentMovie.backdrop_path}`
      : "https://fakeimg.pl/1400x450/758692/909090/?text=No+Image&font=roboto";
    return (
      <React.Fragment>
        <section
          style={{
            backgroundImage: `url(${backdrop_path})`
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
                    currentMovie.poster_path
                  }`}
                  alt=""
                />
              </div>
              <div className="col-md-8 col-sm-12 p-4 d-flex flex-column justify-content-between">
                <div className="row">
                  <div className="col-md-12 ">
                    <h3>{currentMovie.title}</h3>
                    <h6 className="font-weight-light">{currentMovie.release_date}</h6>
                    <div className="mb-3">
                      <Rate
                        disabled
                        allowHalf
                        value={getRate(currentMovie.vote_average)}
                      />
                    </div>
                    <div className="mb-3">
                      <button
                        type="button"
                        size="small"
                        className="btn btn-danger btn-sm"
                      >
                        <Icon type="plus" /> Favorite
                      </button>
                    </div>
                    <p>{currentMovie.overview}</p>
                  </div>
                </div>
                <div className="row align-self-start">
                  <div className="col-12">
                    {trailerData.length === 0 ? null : (
                      <React.Fragment>
                        <h4>Trailers</h4>
                        <div className="row">
                          <MovieTrailers trailerData={trailerData} />
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MovieContent currentMovie={currentMovie} />
      </React.Fragment>
    );
  }
}

MovieIndex.propTypes = {
  currentMovie: PropTypes.object.isRequired
};

export default MovieIndex;
