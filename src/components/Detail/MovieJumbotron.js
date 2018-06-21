import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Vibrant from "node-vibrant";
import MovieContent from "./MovieContent";

class MovieJumbotron extends Component {
  render() {
    console.log("Hello currentMoive", this.props.currentMoive); // log is here
    const { currentMoive } = this.props;
    Vibrant.from(
      `https://image.tmdb.org/t/p/w1400_and_h450_face${currentMoive.backdrop_path}`
    )
      .getSwatches()
      .then(palette => console.log(palette.DarkMuted.getRgb()));
    return (
      <React.Fragment>
        <section
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w1400_and_h450_face${
              currentMoive.backdrop_path
            }")`
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
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${
                    currentMoive.poster_path
                  }`}
                  alt=""
                />
              </div>
              <div className="col-md-8 col-sm-12 p-4 d-flex flex-column justify-content-between">
                <div className="row">
                  <div className="col-md-12 ">
                    <h3>
                      <div className="ant-row">
                        <div className="ant-col-8 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                      </div>
                    </h3>
                    <h4>
                      <div className="ant-row">
                        <div className="ant-col-5 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                      </div>
                    </h4>
                    <div className="ant-card-loading-content">
                      <div className="ant-row">
                        <div className="ant-col-22 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                      </div>
                      <div className="ant-row">
                        <div className="ant-col-8 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                        <div className="ant-col-15 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                      </div>
                      <div className="ant-row">
                        <div className="ant-col-4 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                        <div className="ant-col-18 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                      </div>
                      <div className="ant-row">
                        <div className="ant-col-13 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                        <div className="ant-col-9 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                      </div>
                      <div className="ant-row">
                        <div className="ant-col-4 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                        <div className="ant-col-3 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                        <div className="ant-col-16 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                      </div>
                      <div className="ant-row">
                        <div className="ant-col-13 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                        <div className="ant-col-9 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                      </div>
                      <div className="ant-row">
                        <div className="ant-col-4 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                        <div className="ant-col-3 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                        <div className="ant-col-16 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                      </div>
                      <div className="ant-row">
                        <div className="ant-col-8 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                        <div className="ant-col-6 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                        <div className="ant-col-5 mr-1">
                          <div className="ant-card-loading-block" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-self-end">
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
    );
  }
}

MovieJumbotron.propTypes = {};

export default MovieJumbotron;
