import React, { Component } from "react";
import { Collapse } from "antd";
import PropTypes from "prop-types";
const Panel = Collapse.Panel;

class MovieBasicInfo extends Component {
  render() {
    return (
      <div>
        <h3>Movie's Info</h3>
        <Collapse bordered={false} defaultActiveKey={["1", "2", "3"]}>
          <Panel showArrow={false} header="This is panel header 1" key="1">
            <p>text</p>
          </Panel>
          <Panel showArrow={false} header="This is panel header 2" key="2">
            <p>text</p>
          </Panel>
          <Panel showArrow={false} header="This is panel header 3" key="3">
            <p>text</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

MovieBasicInfo.propTypes = {};

export default MovieBasicInfo;
