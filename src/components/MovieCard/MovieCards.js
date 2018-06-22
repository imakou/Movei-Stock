import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs, Badge, Card, Icon, Avatar, Spin } from "antd";
import MovieCard from "./MovieCard";

const { Meta } = Card;
const TabPane = Tabs.TabPane;

class MovieCards extends Component {
  componentDidMount() {
    this.props.fetch_pop_movies();
  }
  renderMovieCard = value => {
    const { popMovies } = this.props;
    if (popMovies.length === 0) {
      return (
        <div className="d-flex justify-content-center w-100 mt-5">
          <Spin size="large" />
        </div>
      );
    } else {
      return popMovies.map(e => {
        return <MovieCard key={e.id} data={e} />;
      });
    }
  };
  render() {
    return (
      <section className="bg-light">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-10">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Upcoming" key="1">
                  <div className="row ">{this.renderMovieCard()}</div>
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
            <div className="col-2 mb-4">
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
                    <div className="col-12 text-truncate">
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
      </section>
    );
  }
}

MovieCards.propTypes = {
  fetch_pop_movies: PropTypes.func,
  popMovies: PropTypes.array
};

export default MovieCards;
