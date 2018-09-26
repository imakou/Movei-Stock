import React, { Component } from "react";
import PropTypes from "prop-types";
import MemberFavorites from "./MemberFavorites";

class MemberContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-12">
            <MemberFavorites
              favoriteListDetail={this.props.favoriteListDetail}
              delete_favorite_movie={this.props.delete_favorite_movie}
            />
          </div>
        </div>
      </div>
    );
  }
}

MemberContent.propTypes = {
  favoriteListDetail: PropTypes.func.isRequired,
  delete_favorite_movie: PropTypes.func.isRequired
};

export default MemberContent;
