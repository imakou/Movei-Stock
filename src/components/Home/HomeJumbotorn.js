import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Spin } from "antd";
import { Link } from "react-router-dom";

class HomeJumbotorn extends Component {
  componentDidMount() {
    this.props.fetch_now_playing_movies();
  }
  renderHomeJumbotorn = () => {
    const { nowPlayingMovies } = this.props;
    if (nowPlayingMovies.length === 0) {
      return (
        <div className="d-flex justify-content-center w-100 mt-5">
          <Spin size="large" />
        </div>
      );
    } else {
      const currentMovie = nowPlayingMovies[0];
      return (
        <section
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w1400_and_h450_face${
              currentMovie.backdrop_path
            }')`
          }}
          className="AppJumbotron d-flex align-items-end justify-content-center"
        >
          <div className="AppDescription">
            <div className="container ">
              <div className="row ">
                <div className="col-7">
                  <h1>{currentMovie.title}</h1>
                  <p>{currentMovie.overview}</p>
                </div>
                <div className="col-5 pb-5 d-flex align-items-end justify-content-center">
                  <button type="button" className="btn btn-success">
                    <Icon className="mr-1" type="caret-right" />Trailer
                  </button>
                  <button type="button" className="ml-3 btn btn-outline-light">
                    <Link to={`/movie/${currentMovie.id}`}>
                      <Icon className="mr-1" type="search" />Detail
                    </Link>
                  </button>
                  <button type="button" className="ml-3 btn btn-outline-danger">
                    <Icon className="mr-1" type="plus" /> Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };
  render() {
    return <React.Fragment>{this.renderHomeJumbotorn()}</React.Fragment>;
  }
}

HomeJumbotorn.propTypes = {};

export default HomeJumbotorn;
