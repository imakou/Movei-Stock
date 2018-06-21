import React from "react";
import { Card } from "antd";

const MovieCasts = props => {
  const { casts } = props;
  const castsContent = casts.map(e => {
    return (
      <div className="col-md-4 col-sm-6 mb-3" key={e.id}>
        <div className="row">
          <div className="col-4">
            <div className="CastThumbnail">
              <img
                className="img-fluid imgScale rounded-circle"
                alt="example"
                src={`https://image.tmdb.org/t/p/w300_and_h300_face${e.profile_path}`}
              />
            </div>
          </div>
          <div className="col-8">
            <div className="CastDesc">
              <h6>{e.character}</h6>
              <span>{e.name}</span>
            </div>
          </div>
        </div>

        {/* <Card
          className="MovieCard"
          bodyStyle={{ padding: "10px" }}
          cover={
            <img
              className="img-fluid imgScale rounded-circle"
              alt="example"
              src={`https://image.tmdb.org/t/p/w300_and_h300_face${e.profile_path}`}
            />
          }
        >
          <h6>{e.character}</h6>
          <span>{e.name}</span>
        </Card> */}
      </div>
    );
  });
  return <React.Fragment>{castsContent}</React.Fragment>;
};

export default MovieCasts;
