import React, { Component } from "react";
import PropTypes from "prop-types";
import * as actions from "../actions/MovieActions";
import { connect } from "react-redux";
import * as Vibrant from "node-vibrant";
import MovieContent from "../components/Detail/MovieContent";
class MovieDetail extends Component {
  state = {
    currentMoive: this.props.currentMoive
  };
  static getDerivedStateFromProps(props, state) {
    console.log("Hello getDerivedStateFromProps", props); // log is here
    const { currentMoive } = props;
    if (currentMoive) {
      return { currentMoive };
    }
    return null;
  }
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.fetch_movie_detail(movieId);
  }

  render() {
    // console.log("Hello this.props", this.props); // log is here
    const { currentMoive } = this.state;
    console.log("Hello this.state", currentMoive); // log is here
    // console.log("Hello currentMoive", currentMoive); // log is here
    Vibrant.from(
      "https://image.tmdb.org/t/p/w1400_and_h450_face/gBmrsugfWpiXRh13Vo3j0WW55qD.jpg"
    )
      .getSwatches()
      .then(palette => console.log(palette.DarkMuted.getRgb()));
    const content = currentMoive ? (
      <React.Fragment>
        <section
          style={{
            backgroundImage:
              'url("https://image.tmdb.org/t/p/w1400_and_h450_face/gBmrsugfWpiXRh13Vo3j0WW55qD.jpg")'
          }}
          className="AppJumbotron d-flex align-items-stretch position-relative"
        >
          <div
            className="w-100 MovieDetailJumbotronMask"
            style={{ backgroundColor: "rgba(46, 85, 81, 0.8)" }}
          />
          <div className="container MovieDetailJumbotron">
            <div className="row">
              <div className="col-md-4 col-sm-12 p-4">
                <img
                  className="img-fluid"
                  src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ufoGrTRbItHvqk42yNHcyoE0afM.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-8 col-sm-12 p-4 d-flex align-content-between flex-wrap">
                <div className="row">
                  <div className="col-12">
                    <h3>Supergirl</h3>
                    <h4>Overviews</h4>
                    <p>
                      Twenty-four-year-old Kara Zor-El, who was taken in by the Danvers
                      family when she was 13 after being sent away from Krypton, must
                      learn to embrace her powers after previously hiding them. The
                      Danvers teach her to be careful with her powers, until she has to
                      reveal them during an unexpected disaster, setting her on her
                      journey of heroism.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h4>Trailer</h4>
                    <div className="row">
                      <div className="col-md-4 col-sm-12 mb-1">
                        <img
                          src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/t7VSsAbIQS6kpO4ikuCNSiugsSy.jpg"
                          alt=""
                          className="img-fluid border p-1 bg-white"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12 mb-1">
                        <img
                          src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/t7VSsAbIQS6kpO4ikuCNSiugsSy.jpg"
                          alt=""
                          className="img-fluid border p-1 bg-white"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12 mb-1">
                        <img
                          src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/t7VSsAbIQS6kpO4ikuCNSiugsSy.jpg"
                          alt=""
                          className="img-fluid border p-1 bg-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MovieContent />
      </React.Fragment>
    ) : (
      <div>wefejwf</div>
    );
    return content;
  }
}

MovieDetail.propTypes = {};
const mapStateToProps = state => {
  return {
    currentMoive: state.movies.currentMoive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_movie_detail: movieId => {
      dispatch(actions.fetch_movie_detail(movieId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
