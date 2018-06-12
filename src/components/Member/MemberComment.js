import React, { Component } from "react";
import PropTypes from "prop-types";
import { List, Button, Tooltip, Card, Icon, Rate } from "antd";
import TextTruncate from "react-text-truncate";
const { Meta } = Card;

class MemberComment extends Component {
  render() {
    return (
      <div className="col-md-12 mb-4">
        <h3>
          Comments{" "}
          <Tooltip placement="bottom" title="View All">
            <Button shape="circle" className="float-right" icon="eye" />
          </Tooltip>
        </h3>
        <div className="row">
          <div className="col-md-4 col-sm-12 mb-3">
            <Card
              className="MovieCard"
              bodyStyle={{ padding: "10px" }}
              cover={
                <img
                  className="img-fluid imgScale"
                  alt="example"
                  src="https://image.tmdb.org/t/p/w300/2qou2R47XZ1N6SlqGZcoCHDyEhN.jpg"
                />
              }
            >
              <div className="row">
                <div className="col-12 ">
                  <TextTruncate
                    line={2}
                    truncateText="... "
                    text="Curious which components explicitly require jQuery, our JS, and Popper.js? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template."
                    textTruncateChild={<a href="#">Read on</a>}
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="col-md-4 col-sm-12 mb-3">
            <Card
              hoverable
              cover={
                <img
                  className="img-fluid"
                  alt="example"
                  src="https://image.tmdb.org/t/p/w300/2qou2R47XZ1N6SlqGZcoCHDyEhN.jpg"
                />
              }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
          <div className="col-md-4 col-sm-12 mb-3">
            <Card
              hoverable
              cover={
                <img
                  className="img-fluid"
                  alt="example"
                  src="https://image.tmdb.org/t/p/w300/2qou2R47XZ1N6SlqGZcoCHDyEhN.jpg"
                />
              }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

MemberComment.propTypes = {};

export default MemberComment;
