import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieCards from "../components/MovieCard/MovieCards";
import * as actions from "../actions/MovieActions";
import { connect } from "react-redux";
import HomeJumbotorn from "../components/Home/HomeJumbotorn";

class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <HomeJumbotorn
          fetch_now_playing_movies={this.props.fetch_now_playing_movies}
          nowPlayingMovies={this.props.nowPlayingMovies}
        />
        <MovieCards
          popMovies={this.props.popMovies}
          nowPlayingMovies={this.props.nowPlayingMovies}
          fetch_pop_movies={this.props.fetch_pop_movies}
        />
      </div>
    );
  }
}

Home.propTypes = {};

const mapStateToProps = state => {
  return {
    popMovies: state.movies.popMovies,
    nowPlayingMovies: state.movies.nowPlayingMovies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_pop_movies: () => {
      dispatch(actions.fetch_pop_movies());
    },
    fetch_now_playing_movies: () => {
      dispatch(actions.fetch_now_playing_movies());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
