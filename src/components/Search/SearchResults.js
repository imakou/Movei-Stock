import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";

class SearchResults extends Component {
  state = {
    curPage: 1
  };

  renderMovies = () => {
    const { searchedMovies } = this.props;
    if (searchedMovies.length !== 0) {
      return searchedMovies.map(e => <MovieCard key={e.id} data={e} />);
    } else {
      return null;
    }
  };

  renderLoadingMore = () => {
    const { curPage } = this.state;
    const { searchedMoviesTotalPage } = this.props;

    return curPage === searchedMoviesTotalPage || !searchedMoviesTotalPage ? null : (
      <button
        type="button"
        onClick={this.fetchMoreMovies}
        className="btn btn-primary btnLoadMoreMovie"
      >
        Load More
      </button>
    );
  };

  fetchMoreMovies = () => {
    this.setState(
      {
        curPage: (this.state.curPage += 1)
      },
      this.props.fetch_more_movies(this.props.keyWord, this.state.curPage)
    );
  };

  render() {
    console.log("Hello this.state", this.state); // log is here
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
