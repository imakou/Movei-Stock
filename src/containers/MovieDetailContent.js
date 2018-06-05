import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs, Badge, Card, Icon, Avatar } from "antd";
const TabPane = Tabs.TabPane;
const { Meta } = Card;

class MovieDetailContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <Tabs defaultActiveKey="1">
              <TabPane tab="SUMMARY" key="1">
                <div className="col-md-12">
                  <h3>Cast</h3>
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="border border-top-0 shadow-sm bg-white">
                        <img
                          className="img-fluid rounded-top"
                          src="https://image.tmdb.org/t/p/w200/olYcaJoZuHVW92gZgtVMUWGqMR8.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid "
                          src="https://image.tmdb.org/t/p/w200/olYcaJoZuHVW92gZgtVMUWGqMR8.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid "
                          src="https://image.tmdb.org/t/p/w200/olYcaJoZuHVW92gZgtVMUWGqMR8.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="border shadow-sm bg-white">
                        <img
                          className="img-fluid "
                          src="https://image.tmdb.org/t/p/w200/olYcaJoZuHVW92gZgtVMUWGqMR8.jpg"
                          alt=""
                        />
                        <div className="p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="m-0 text-left">DeadPool2</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-5">
                  <h3>Reviews</h3>
                  <div className="row">
                    <div className="col-12">
                      <Card>
                        <Meta
                          avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          }
                          title={
                            <React.Fragment>
                              <div className="d-flex flex-row">
                                <h6>Hello</h6>
                                <Badge
                                  count={109}
                                  style={{ backgroundColor: "#52c41a" }}
                                  className="ml-2"
                                />
                              </div>
                              <small className="text-secondary">
                                Written by Screen-Space on April 25, 2018
                              </small>
                            </React.Fragment>
                          }
                          description="This is the description.The story may not be the most original, with its Shakespearean turn overs, but it is well shaped and Serkis performance is remarkable.The animation of the apes, which was already superb in the previous movie, finally reaches a level in which you can believe they are more real than the human actors.Maybe a bit too long, but a good time for a not totally dumb movie."
                        />
                      </Card>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="BACKDROPS" key="2">
                <h1>q</h1>
              </TabPane>
              <TabPane tab="POSTERS" key="3">
                <h4>ffggewerwer</h4>
              </TabPane>
              <TabPane tab="VIDEOS" key="4">
                <h4>ffggewerwer</h4>
              </TabPane>
            </Tabs>
          </div>
          <div className="col-md-3 col-sm-12">2</div>
        </div>
      </div>
    );
  }
}

MovieDetailContent.propTypes = {};

export default MovieDetailContent;
