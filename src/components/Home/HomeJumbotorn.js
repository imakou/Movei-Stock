import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Spin } from "antd";
import { Link } from "react-router-dom";
import FavoriteBtnHOC from "../../HOC/FavoriteBtnHOC";
import FavoriteIcon from "../common/FavoriteIcon";

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
      const backdrop_path = currentMovie.backdrop_path
        ? `https://image.tmdb.org/t/p/w1400_and_h450_face${currentMovie.backdrop_path}`
        : "https://fakeimg.pl/1400x450/eee/333333,255/?text=No+Image&font=roboto";
      const FavBtnHoc = FavoriteBtnHOC(FavoriteIcon);

      return (
        <section
          style={{
            backgroundImage: `url(${backdrop_path})`
          }}
          className="AppJumbotron d-flex align-items-end justify-content-center"
        >
          <div className="AppDescription">
            <div className="container ">
              <div className="row ">
                <div className="col-sm-12 col-md-7">
                  <h1>{currentMovie.title}</h1>
                  <p>{currentMovie.overview}</p>
                </div>
                <div className="col-sm-12 col-md-5 pb-5 d-flex align-items-end justify-content-center">
                  <div className="row">
                    <Link to={`/movie/${currentMovie.id}`}>
                      <button type="button" className="ml-3 mr-3 btn btn-light">
                        <Icon className="mr-1" type="search" />
                        Detail
                      </button>
                    </Link>
                    {<FavBtnHoc movie_id={currentMovie.id} />}
                  </div>
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

HomeJumbotorn.propTypes = {
  fetch_now_playing_movies: PropTypes.func,
  nowPlayingMovies: PropTypes.array
};

export default HomeJumbotorn;
