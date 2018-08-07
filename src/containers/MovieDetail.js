import React, { Component } from "react";
import PropTypes from "prop-types";
import * as actions from "../actions/MovieActions";
import { connect } from "react-redux";

import MovieDetailLoading from "../components/Detail/MovieDetailLoading";
import MovieIndex from "../components/Detail/MovieIndex";

class MovieDetail extends Component {
  state = {
    movieId: this.props.match.params.id,
    currentMovie: this.props.currentMovie
  };

  static getDerivedStateFromProps(props, state) {
    const { currentMovie, match } = props;
    const movieId = match.params.id;
    if (state.movieId !== movieId) {
      props.fetch_movie_detail(movieId);
      return { movieId };
    }
    if (currentMovie) {
      return { currentMovie };
    }

    return null;
  }

  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.fetch_movie_detail(movieId);
  }

  componentWillUnmount() {
    this.props.empty_movie_detail();
    this.props.empty_search_movies();
  }

  render() {
    const { currentMovie } = this.state;
    const content = currentMovie ? (
      <MovieIndex currentMovie={currentMovie} />
    ) : (
      <MovieDetailLoading />
    );
    return content;
  }
}

MovieDetail.propTypes = {};

const mapStateToProps = state => {
  return {
    currentMovie: state.movies.currentMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_movie_detail: movieId => {
      dispatch(actions.fetch_movie_detail(movieId));
    },
    empty_movie_detail: () => {
      dispatch(actions.empty_movie_detail());
    },
    empty_search_movies: () => {
      dispatch(actions.empty_search_movies());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
