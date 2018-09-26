import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import * as MemberActions from "../actions/MemberActions";

const FavoriteBtnHOC = (WrappedComponent, data) => {
  class HOC extends React.Component {
    popNotification = movie => {};
    addToFavorite = movie_id => {
      this.props.add_movie_to_favorite(movie_id);
    };
    deleteFromFavorite = movie_id => {
      this.props.delete_favorite_movie(movie_id);
    };
    render() {
      const { movie_id, favoriteList } = this.props;
      const isFavorite = favoriteList.map(m => m.movie_id).indexOf(movie_id.toString()) !== -1;
      return (
        <WrappedComponent
          isfavorite={isFavorite ? 1 : 0}
          onClick={isFavorite ? () => this.deleteFromFavorite(movie_id) : () => this.addToFavorite(movie_id)}
        />
      );
    }
  }

  return HOC;
};

const mapStateToProps = state => {
  return {
    favoriteList: state.member.favoriteList,
    profile: state.member.profile,
    favoriteListDetail: state.member.favoriteListDetail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_favorite_list: () => {
      dispatch(MemberActions.fetch_favorite_list());
    },
    add_movie_to_favorite: movieId => {
      dispatch(MemberActions.add_movie_to_favorite(movieId));
    },
    delete_favorite_movie: movieId => {
      dispatch(MemberActions.delete_favorite_movie(movieId));
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  FavoriteBtnHOC
);
