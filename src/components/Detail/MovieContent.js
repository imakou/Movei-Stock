import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieBasicInfo from "./MovieBasicInfo";
import MovieSummary from "./MovieSummary";
import MovieImages from "./MovieImages";
import MovieTrailers from "./MovieTrailers";
import { Tabs } from "antd";
const TabPane = Tabs.TabPane;

class MovieContent extends Component {
  render() {
    const { backdrops, posters } = this.props.currentMoive.images;
    const { videos } = this.props.currentMoive;

    const imagesLength = backdrops.length + posters.length;
    const videosLength = videos.length;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-10 col-sm-12">
            <Tabs defaultActiveKey="1">
              <TabPane tab="SUMMARY" key="1">
                <MovieSummary currentMoive={this.props.currentMoive} />
              </TabPane>
              <TabPane tab={`IMAGES (${imagesLength})`} key="2">
                <MovieImages images={this.props.currentMoive.images} />
              </TabPane>
              <TabPane tab={`VIDEOS (${videosLength})`} key="3">
                <div className="row">
                  <MovieTrailers trailerData={this.props.currentMoive.videos} />
                </div>
              </TabPane>
            </Tabs>
          </div>
          <div className="col-md-2 col-sm-12">
            <MovieBasicInfo data={this.props.currentMoive} />
          </div>
        </div>
      </div>
    );
  }
}

MovieContent.propTypes = {};

export default MovieContent;
