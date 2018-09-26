import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";

class SearchResults extends Component {
  state = {
    curPage: 1
  };

  renderMovies = () => {
    const { searchedMovies } = this.props;
    if (searchedMovies.length !== 0) {
      return searchedMovies.map(e => <MovieCard favoriteList={this.props.favoriteList} key={e.id} data={e} />);
    } else {
      return null;
    }
  };

  renderLoadingMore = () => {
    const { curPage } = this.state;
    const { searchedMoviesTotalPage } = this.props;

    return curPage === searchedMoviesTotalPage || !searchedMoviesTotalPage ? null : (
      <button type="button" onClick={this.fetchMoreMovies} className="btn btn-primary btnLoadMoreMovie">
        Load More
      </button>
    );
  };

  fetchMoreMovies = () => {
    const curPage = this.state.curPage + 1;
    this.setState(
      {
        curPage
      },
      this.props.fetch_more_movies(this.props.keyWord, this.state.curPage)
    );
  };

  render() {
    return (
      <div className="row pb-5">
        <div className="col-12 SearchResults">
          <div className="SearchResultsContent">
            <div className="row">{this.renderMovies()}</div>
            {this.renderLoadingMore()}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
