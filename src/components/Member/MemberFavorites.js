import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Popconfirm, Tooltip, Card, Icon, Rate } from "antd";
const { Meta } = Card;

class MemberFavorites extends Component {
  componentDidMount() {
    const { favoriteList } = this.props;
    this.props.fetch_favorite_list_detail(favoriteList);
  }
  handleDelete = () => {
    console.log("Hello delete"); // log is here
  };
  renderFavCard = () => {
    const { favoriteListDetail } = this.props;
    console.log("Hello favoriteListDetail", favoriteListDetail); // log is here
    const r = favoriteListDetail.map(movie => (
      <div className="col-md-3 col-sm-12 mb-3">
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
            <span>Detail</span>,
            <Popconfirm
              placement="top"
              title={"Delete the move from your favorite list?"}
              onConfirm={this.handleDelete}
              okText="Yes"
              cancelText="No"
            >
              <span>Delete</span>
            </Popconfirm>
          ]}
        >
          <div className="d-flex justify-content-center">
            <Rate allowHalf defaultValue={2.5} />
          </div>
        </Card>
      </div>
    ));
    return r;
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
  favoriteList: PropTypes.array.isRequired,
  favoriteListDetail: PropTypes.array,
  fetch_favorite_list_detail: PropTypes.func.isRequired
};

export default MemberFavorites;
