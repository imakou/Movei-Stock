import React from "react";
import MovieCasts from "./MovieCasts";
import MovieReviews from "./MovieReviews";

const MovieSummary = props => {
  const { currentMoive } = props;
  return (
    <React.Fragment>
      <div className="col-md-12">
        <h3 className="mb-4">Main Cast</h3>
        <div className="row">
          <MovieCasts casts={currentMoive.casts} />
        </div>
      </div>
      <div className="col-md-12 mt-5">
        <h4>Reviews</h4>
        <div className="row">
          <MovieReviews reviews={currentMoive.reviews} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieSummary;
