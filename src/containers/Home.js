import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieCards from "../components/MovieCard/MovieCards";
import * as MovieActions from "../actions/MovieActions";
import * as MemberActions from "../actions/MemberActions";
import { connect } from "react-redux";
import HomeJumbotorn from "../components/Home/HomeJumbotorn";

class Home extends Component {
  componentDidMount() {
    this.props.fetch_pop_movies();
    this.props.fetch_now_playing_movies();
  }

  render() {
    return (
      <div>
        <HomeJumbotorn
          fetch_now_playing_movies={this.props.fetch_now_playing_movies}
          nowPlayingMovies={this.props.nowPlayingMovies}
          search_movies={this.props.search_movies}
        />
        <MovieCards
          popMovies={this.props.popMovies}
          favoriteList={this.props.favoriteList}
          nowPlayingMovies={this.props.nowPlayingMovies}
          add_movie_to_favorite={this.props.add_movie_to_favorite}
          delete_favorite_movie={this.props.delete_favorite_movie}
        />
      </div>
    );
  }
}

Home.propTypes = {
  add_movie_to_favorite: PropTypes.func,
  favoriteList: PropTypes.array,
  popMovies: PropTypes.array
};

const mapStateToProps = state => {
  return {
    popMovies: state.movies.popMovies,
    nowPlayingMovies: state.movies.nowPlayingMovies,
    favoriteList: state.member.favoriteList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_pop_movies: () => {
      dispatch(MovieActions.fetch_pop_movies());
    },
    fetch_now_playing_movies: () => {
      dispatch(MovieActions.fetch_now_playing_movies());
    },
    search_movies: keyWord => {
      dispatch(MovieActions.search_movies(keyWord));
    },
    add_movie_to_favorite: movie_id => {
      dispatch(MemberActions.add_movie_to_favorite(movie_id));
    },
    delete_favorite_movie: movie_id => {
      dispatch(MemberActions.delete_favorite_movie(movie_id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
