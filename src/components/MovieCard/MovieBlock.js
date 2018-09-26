import React from "react";
import { Spin } from "antd";
import MovieCard from "./MovieCard";

const MovieBlock = props => {
  const { data, add_movie_to_favorite, favoriteList, delete_favorite_movie } = props;
  const movieBlock =
    data.length === 0 ? (
      <div className="d-flex justify-content-center w-100 mt-5">
        <Spin size="large" />
      </div>
    ) : (
      data.map(e => {
        return (
          <MovieCard
            add_movie_to_favorite={add_movie_to_favorite}
            delete_favorite_movie={delete_favorite_movie}
            key={e.id}
            data={e}
            favoriteList={favoriteList}
          />
        );
      })
    );

  return <div className="row">{movieBlock}</div>;
};

export default MovieBlock;
