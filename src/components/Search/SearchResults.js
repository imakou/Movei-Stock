import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const SearchResults = props => {
  const renderMovies = () => {
    const { searchedMovies } = props;
    if (searchedMovies.length !== 0) {
      return searchedMovies.map(e => <MovieCard key={e.id} data={e} />);
    } else {
      return <h1>ef</h1>;
    }
  };
  console.log("Hello renderMovies", renderMovies()); // log is here
  return (
    <div className="row">
      <div className="col-12 SearchResults">
        <div className="SearchResultsContent">
          <div className="row">{renderMovies()}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
