import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Spin, Alert } from "antd";
import * as MemberActions from "../actions/MemberActions";
import MemberContent from "../components/Member/MemberContent";

class Member extends Component {
  state = {
    favoriteListLength: 0
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("Hello nextProps", nextProps.favoriteList.length); // log is here
    console.log("Hello prevState", prevState); // log is here
    if (prevState.favoriteListLength !== nextProps.favoriteList.length) {
      nextProps.fetch_favorite_list_detail(nextProps.favoriteList);
      return { favoriteListLength: nextProps.favoriteList.length };
    }
    return null;
  }

  componentDidMount() {
    this.props.fetch_favorite_list();
  }

  render() {
    console.log("Hello favoriteList", this.props.favoriteList); // log is here
    const { favoriteListDetail, profile, favoriteListStatus } = this.props;
    console.log("Hello favoriteListDetail", favoriteListDetail); // log is here
    const JumbotomMoive = favoriteListDetail[Math.floor(Math.random() * favoriteListDetail.length)];
    console.log("Hello JumbotomMoive", JumbotomMoive); // log is here

    return (
      <React.Fragment>
        {favoriteListStatus === "null" ? (
          <div className="d-flex justify-content-center w-100 mt-5 mb-5">
            <Alert message="Opps..." description="You've not added any favorite movies." type="info" />
          </div>
        ) : favoriteListDetail.length !== 0 ? (
          <React.Fragment>
            <section
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w1400_and_h450_face/${JumbotomMoive.backdrop_path}")`
              }}
              className="MemberJumbotron d-flex align-items-end"
            >
              <div className="MemberJumbotronInfo w-100">
                <div className="container MovieDetailJumbotron">
                  <div className="row">
                    <div className="col-md-12">
                      <div>
                        <h2 className="mt-2">{profile.nickname}</h2>
                        <div className="row no-gutters MemberJumbotronDesc d-flex justify-content-start">
                          <div>
                            <h6>
                              <small>Member Type: Standard</small>
                            </h6>
                          </div>
                          <div className="">
                            <h6>
                              <small>Collection: {favoriteListDetail.length}</small>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <MemberContent
                favoriteListDetail={this.props.favoriteListDetail}
                delete_favorite_movie={this.props.delete_favorite_movie}
              />
            </section>
          </React.Fragment>
        ) : (
          <div className="d-flex justify-content-center w-100 mt-5 mb-5">
            <Spin size="large" />
          </div>
        )}
      </React.Fragment>
    );
  }
}

Member.propTypes = {
  favoriteList: PropTypes.array,
  favoriteListDetail: PropTypes.array,
  profile: PropTypes.object,
  fetch_favorite_list: PropTypes.func,
  delete_favorite_movie: PropTypes.func,
  fetch_favorite_list_detail: PropTypes.func,
  favoriteListStatus: PropTypes.string
};

const mapStateToProps = state => {
  return {
    favoriteList: state.member.favoriteList,
    profile: state.member.profile,
    favoriteListDetail: state.member.favoriteListDetail,
    favoriteListStatus: state.member.favoriteListStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_favorite_list: () => {
      dispatch(MemberActions.fetch_favorite_list());
    },
    fetch_favorite_list_detail: favList => {
      dispatch(MemberActions.fetch_favorite_list_detail(favList));
    },
    delete_favorite_movie: movieId => {
      dispatch(MemberActions.delete_favorite_movie(movieId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Member);
