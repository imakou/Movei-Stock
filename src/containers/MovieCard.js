import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs, Badge, Card, Icon, Avatar } from "antd";
const { Meta } = Card;
const TabPane = Tabs.TabPane;

class MovieCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-9">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Upcoming" key="1">
                  <div className="row ">
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Now Playing" key="2">
                  <div className="row ">
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mb-4">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid"
                          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                            <h6 className="m-0 text-left text-black-50">
                              <small>May 17, 2018</small>
                            </h6>
                          </div>

                          <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </div>
            <div className="col-3 mb-4">
              <h4>Reviews</h4>
              <Card
                className="shadow-sm"
                style={{ padding: 10 }}
                cover={
                  <img
                    alt="example"
                    src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg"
                  />
                }
              >
                <Meta
                  title={
                    <React.Fragment>
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{" "}
                      Abcefd
                    </React.Fragment>
                  }
                  description={
                    <div class="col-12 text-truncate">
                      wegijerogjorjtghowerjghuierhwgoerjrgoejrgerhgwifwue
                    </div>
                  }
                />
              </Card>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-9">
              <h5>People Most Like</h5>
              <div className="row">
                <div className="col-3 mb-4">
                  <div className="border shadow-sm bg-white">
                    <img
                      className="img-fluid"
                      src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                      alt=""
                    />
                    <div className="p-2 d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="m-0 text-left">DeadPool2</h6>
                        <h6 className="m-0 text-left text-black-50">
                          <small>May 17, 2018</small>
                        </h6>
                      </div>

                      <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                    </div>
                  </div>
                </div>
                <div className="col-3 mb-4">
                  <div className="border shadow-sm bg-white">
                    <img
                      className="img-fluid"
                      src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                      alt=""
                    />
                    <div className="p-2 d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="m-0 text-left">DeadPool2</h6>
                        <h6 className="m-0 text-left text-black-50">
                          <small>May 17, 2018</small>
                        </h6>
                      </div>

                      <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                    </div>
                  </div>
                </div>
                <div className="col-3 mb-4">
                  <div className="border shadow-sm bg-white">
                    <img
                      className="img-fluid"
                      src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                      alt=""
                    />
                    <div className="p-2 d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="m-0 text-left">DeadPool2</h6>
                        <h6 className="m-0 text-left text-black-50">
                          <small>May 17, 2018</small>
                        </h6>
                      </div>

                      <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                    </div>
                  </div>
                </div>
                <div className="col-3 mb-4">
                  <div className="border shadow-sm bg-white">
                    <img
                      className="img-fluid"
                      src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                      alt=""
                    />
                    <div className="p-2 d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="m-0 text-left">DeadPool2</h6>
                        <h6 className="m-0 text-left text-black-50">
                          <small>May 17, 2018</small>
                        </h6>
                      </div>

                      <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
                    </div>
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

MovieCard.propTypes = {};

export default MovieCard;
