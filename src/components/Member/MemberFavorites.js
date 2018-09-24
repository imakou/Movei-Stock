import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Popconfirm, Tooltip, Card, Icon, Rate } from "antd";
const { Meta } = Card;

class MemberFavorites extends Component {
  handleDelete = movie_id => {
    console.log("Hello delete", movie_id); // log is here
    this.props.delete_favorite_movie(movie_id);
  };
  renderFavCard = () => {
    const { favoriteListDetail } = this.props;
    const Cards = favoriteListDetail.map(movie => (
      <div key={movie.id} className="col-md-3 col-sm-12 mb-3">
        <Card
          className="MovieCard"
          bodyStyle={{ padding: "10px" }}
          cover={
            <img
              className="img-fluid imgScale"
              alt="example"
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`
                  : "https://fakeimg.pl/300x169/eee/333333,255/?text=No+Image&font=roboto"
              }
            />
          }
          actions={[
            <span>
              <a href={`/movie/${movie.id}`}> Detail</a>
            </span>,
            <Popconfirm
              placement="top"
              title={"Delete the moive from your favorite list?"}
              onConfirm={() => this.handleDelete(movie.id)}
              okText="Yes"
              cancelText="No"
            >
              <span>Delete</span>
            </Popconfirm>
          ]}
        >
          <div className="d-flex justify-content-center">
            {/* <Rate allowHalf defaultValue={2.5} /> */}
            <div className="MovieTitleHeader">{movie.original_title}</div>
          </div>
        </Card>
      </div>
    ));
    return Cards;
  };
  render() {
    return (
      <div className="col-md-12 mb-4">
        <h3>
          Favorites{" "}
          <Tooltip placement="bottom" title="View All">
            <Button shape="circle" className="float-right" icon="eye" />
          </Tooltip>
        </h3>
        <div className="row">{this.renderFavCard()}</div>
      </div>
    );
  }
}

MemberFavorites.propTypes = {
  favoriteList: PropTypes.array,
  favoriteListDetail: PropTypes.array,
  fetch_favorite_list_detail: PropTypes.func
};

export default MemberFavorites;
