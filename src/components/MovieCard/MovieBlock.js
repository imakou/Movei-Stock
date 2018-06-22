import React from "react";
import { Spin } from "antd";
import MovieCard from "./MovieCard";

const MovieBlock = props => {
  const { data } = props;
  const movieBlock =
    data.length === 0 ? (
      <div className="d-flex justify-content-center w-100 mt-5">
        <Spin size="large" />
      </div>
    ) : (
      data.map(e => {
        return <MovieCard key={e.id} data={e} />;
      })
    );

  return <div className="row">{movieBlock}</div>;
};

export default MovieBlock;
