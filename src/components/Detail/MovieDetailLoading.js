import React, { Component } from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";

class MovieDetailLoading extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="AppJumbotron d-flex align-items-stretch position-relative">
          <div
            className="w-100 MovieDetailJumbotronMask"
            style={{ backgroundColor: "rgba(50, 50, 50, 0.7)" }}
          />
          <div className="container MovieDetailJumbotron">
            <div className="row">
              <div className="col-md-4 col-sm-12 p-4 ">
                <div className="MovieDetailEmptyPost d-flex justify-content-center align-items-center">
                  <Spin size="large" />
                </div>
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
              </div>
            </div>
          </div>
        </section>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-8">
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
            <div className="col-4">
              <div className="ant-card-loading-content">
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
        </div>
      </React.Fragment>
    );
  }
}

MovieDetailLoading.propTypes = {};

export default MovieDetailLoading;
