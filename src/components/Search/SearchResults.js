import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Button } from "antd";
const SearchResults = props => {
  let curPage = 1;

  const renderMovies = () => {
    const { searchedMovies } = props;
    if (searchedMovies.length !== 0) {
      return searchedMovies.map(e => <MovieCard key={e.id} data={e} />);
    } else {
      return null;
    }
  };

  const fetchMoreMovies = () => {
    curPage + 1;
    props.fetch_more_movies(props.keyWord, curPage);
  };

  return (
    <div className="row">
      <div className="col-12 SearchResults">
        <div className="SearchResultsContent">
          <div className="row">{renderMovies()}</div>
          <Button onClick={fetchMoreMovies}>More</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
