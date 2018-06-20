import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs, Badge, Card, Icon, Avatar } from "antd";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";

class MovieCard extends Component {
  render() {
    const { data } = this.props;
    console.log("Hello this.props.data", this.props.data); // log is here
    return (
      <div className="col-md-3 col-sm-12 mb-4">
        <div className="border shadow-sm bg-white">
          <div className="MovieBigCard">
            <Link to={`movie/${data.id}`}>
              <img
                className="img-fluid imgScale"
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`}
                alt=""
              />
            </Link>
          </div>
          <div className="p-2 d-flex justify-content-between align-items-center">
            <div className="col-10 p-0">
              <h6 className="m-0 text-left MovieTitleHeader">{data.title}</h6>
              <h6 className="m-0 text-left text-black-50">
                <small>{data.release_date}</small>
              </h6>
            </div>
            <div className="col-2 p-0">
              <span class="badge badge-pill badge-success">{data.vote_average}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {};

export default MovieCard;
