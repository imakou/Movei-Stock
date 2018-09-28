import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SearchFilter from "../components/Search/SearchFilter";
import SearchResults from "../components/Search/SearchResults";
import TvNoSignal from "../media/tv_no_signal.mp4";
import * as actions from "../actions/MovieActions";
import * as MemberActions from "../actions/MemberActions";

class Search extends Component {
  renderBG = () => {
    const { searchedMovies } = this.props;
    if (searchedMovies.length === 0) {
      return (
        <video loop muted autoPlay className="fullscreen-bg__video">
          <source src={TvNoSignal} type="video/mp4" />
        </video>
      );
    } else {
      const BGUrl = searchedMovies[0].backdrop_path;
      return (
        <section
          className="SearchJumbotron"
          style={{
            background: `url('https://image.tmdb.org/t/p/w1400_and_h450_face${BGUrl}') no-repeat center center fixed`
          }}
        />
      );
    }
  };
  componentWillUnmount() {
    this.props.empty_search_movies();
  }
  render() {
    return (
      <div className="position-relative">
        <div className="fullscreen-bg">
          {this.renderBG()}
          <div className="video_mask" />
        </div>
        <div className="container">
          <SearchFilter
            search_movies={this.props.search_movies}
            update_keyword={this.props.update_keyword}
            keyWord={this.props.keyWord}
          />
          <SearchResults
            keyWord={this.props.keyWord}
            fetch_more_movies={this.props.fetch_more_movies}
            favoriteList={this.props.favoriteList}
            searchedMovies={this.props.searchedMovies}
            searchedMoviesTotalPage={this.props.searchedMoviesTotalPage}
            add_movie_to_favorite={this.props.add_movie_to_favorite}
            delete_favorite_movie={this.props.delete_favorite_movie}
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  searchedMovies: PropTypes.array,
  favoriteList: PropTypes.array,
  searchedMoviesTotalPage: PropTypes.number,
  keyWord: PropTypes.string,
  search_movies: PropTypes.func,
  update_keyword: PropTypes.func,
  fetch_more_movies: PropTypes.func,
  empty_search_movies: PropTypes.func
};

const mapStateToProps = state => {
  return {
    searchedMovies: state.movies.searchedMovies,
    searchedMoviesTotalPage: state.movies.searchedMoviesTotalPage,
    keyWord: state.movies.keyWord,
    favoriteList: state.member.favoriteList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search_movies: keyWord => {
      dispatch(actions.search_movies(keyWord));
    },
    update_keyword: keyWord => {
      dispatch(actions.update_keyword(keyWord));
    },
    fetch_more_movies: (keyWord, page) => {
      dispatch(actions.fetch_more_movies(keyWord, page));
    },
    empty_search_movies: () => {
      dispatch(actions.empty_search_movies());
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
)(Search);
