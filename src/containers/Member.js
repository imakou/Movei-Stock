import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Vibrant from "node-vibrant";
import * as MemberActions from "../actions/MemberActions";
import MemberContent from "../components/Member/MemberContent";

class Member extends Component {
  componentDidMount() {
    this.props.fetch_favorite_list();
  }

  render() {
    console.log("Hello favoriteList", this.props.favoriteList); // log is here
    Vibrant.from(
      "https://image.tmdb.org/t/p/w1400_and_h450_face/kqoBtMmiycbbhGLXGkKhL8SdaWB.jpg"
    )
      .getSwatches()
      .then(palette => console.log(palette.DarkVibrant.getRgb()));
    return (
      <React.Fragment>
        <section
          style={{
            backgroundImage:
              'url("https://image.tmdb.org/t/p/w1400_and_h450_face/kqoBtMmiycbbhGLXGkKhL8SdaWB.jpg")'
          }}
          className="MemberJumbotron d-flex align-items-end"
        >
          {/* <div
            className="w-100 MovieDetailJumbotronMask"
            style={{ backgroundColor: "rgba(113, 8, 9, 0.8)" }}
          /> */}
          <div className="MemberJumbotronInfo w-100">
            <div className="container MovieDetailJumbotron">
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <h1>Imakou</h1>
                    <div className="row no-gutters MemberJumbotronDesc d-flex justify-content-start">
                      <div className="">
                        <h6>
                          <small>Member Type: Standard</small>
                        </h6>
                      </div>
                      <div className="">
                        <h6>
                          <small>Collection: 5</small>
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
            fetch_favorite_list_detail={this.props.fetch_favorite_list_detail}
            favoriteList={this.props.favoriteList}
            favoriteListDetail={this.props.favoriteListDetail}
          />
        </section>
      </React.Fragment>
    );
  }
}

Member.propTypes = {
  favoriteListDetail: PropTypes.array
};

const mapStateToProps = state => {
  return {
    favoriteList: state.member.favoriteList,
    favoriteListDetail: state.member.favoriteListDetail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_favorite_list: () => {
      dispatch(MemberActions.fetch_favorite_list());
    },
    fetch_favorite_list_detail: favList => {
      dispatch(MemberActions.fetch_favorite_list_detail(favList));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Member);
