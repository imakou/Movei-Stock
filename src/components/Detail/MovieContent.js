import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieBasicInfo from "./MovieBasicInfo";
import MovieCasts from "./MovieCasts";
import MovieReviews from "./MovieReviews";
import { Tabs } from "antd";
const TabPane = Tabs.TabPane;

class MovieContent extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-10 col-sm-12">
            <Tabs defaultActiveKey="1">
              <TabPane tab="SUMMARY" key="1">
                <div className="col-md-12">
                  <h3 className="mb-4">Main Cast</h3>
                  <div className="row">
                    <MovieCasts casts={this.props.currentMoive.casts} />
                  </div>
                </div>
                <div className="col-md-12 mt-5">
                  <h3>Reviews</h3>
                  <div className="row">
                    <MovieReviews reviews={this.props.currentMoive.reviews} />
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
          <div className="col-md-2 col-sm-12">
            <MovieBasicInfo />
          </div>
        </div>
      </div>
    );
  }
}

MovieContent.propTypes = {};

export default MovieContent;
