import React, { Component } from "react";
import { List } from "antd";
import PropTypes from "prop-types";

class MemberContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row  pt-5 pb-5">
          <div className="col-md-8">
            <h1>Hello World</h1>
          </div>
          <div className="col-md-4">
            <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={[
                "Racing car sprays burning fuel into crowd.",
                "Japanese princess to wed commoner.",
                "Australian walks 100km after outback crash.",
                "Man charged over missing wedding girl.",
                "Los Angeles battles huge wildfires."
              ]}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </div>
        </div>
      </div>
    );
  }
}

MemberContent.propTypes = {};

export default MemberContent;
