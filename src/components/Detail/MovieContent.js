import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieBasicInfo from "./MovieBasicInfo";
import MovieSummary from "./MovieSummary";
import MovieImages from "./MovieImages";
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
                <MovieSummary currentMoive={this.props.currentMoive} />
              </TabPane>
              <TabPane tab="IMAGES" key="2">
                <MovieImages images={this.props.currentMoive.images} />
              </TabPane>
              <TabPane tab="VIDEOS" key="3">
                <h4>ffggewerwer</h4>
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
