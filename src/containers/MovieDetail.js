import React, { Component } from "react";
import PropTypes from "prop-types";
import * as actions from "../actions/MovieActions";
import { connect } from "react-redux";

import MovieDetailLoading from "../components/Detail/MovieDetailLoading";
import MovieJumbotron from "../components/Detail/MovieJumbotron";

class MovieDetail extends Component {
  state = {
    currentMoive: this.props.currentMoive
  };

  static getDerivedStateFromProps(props, state) {
    const { currentMoive } = props;
    if (currentMoive) {
      return { currentMoive };
    }
    return null;
  }

  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.fetch_movie_detail(movieId);
  }

  render() {
    const { currentMoive } = this.state;
    const content = currentMoive ? (
      <MovieJumbotron currentMoive={currentMoive} />
    ) : (
      <MovieDetailLoading />
    );
    return content;
  }
}

MovieDetail.propTypes = {};
const mapStateToProps = state => {
  return {
    currentMoive: state.movies.currentMoive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_movie_detail: movieId => {
      dispatch(actions.fetch_movie_detail(movieId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
