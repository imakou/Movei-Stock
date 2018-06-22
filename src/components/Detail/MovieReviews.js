import React, { Fragment } from "react";
import { Tabs, Badge, Card, Icon, Avatar } from "antd";
import { RandomBGC } from "../../_utils";
const { Meta } = Card;

const MovieReviews = props => {
  const { reviews } = props;
  if (reviews.length === 0)
    return (
      <div className="col-12 ">
        <div className="alert alert-secondary text-center" role="alert">
          This movie hasn't had review yet.
        </div>
      </div>
    );
  const reviewContents = reviews.map(e => (
    <div key={e.id} className="col-12 mb-3">
      <Card>
        <Meta
          avatar={
            <div
              style={{ backgroundImage: RandomBGC() }}
              className="d-flex avtarBG justify-content-center align-items-center rounded-circle"
            >
              <div className="avtarUserLetter text-uppercase">{e.author[0]}</div>
            </div>
          }
          title={
            <React.Fragment>
              <div className="d-flex flex-row">
                <h6>{e.author}</h6>
                {/* <Badge
                    count={109}
                    style={{ backgroundColor: "#52c41a" }}
                    className="ml-2"
                  /> */}
              </div>
              <small className="text-secondary">
                Written by Screen-Space on April 25, 2018
              </small>
            </React.Fragment>
          }
          description={
            <div
              dangerouslySetInnerHTML={{
                __html: e.content.replace(/(?:\r\n|\r|\n)/g, "<br />")
              }}
            />
          }
        />
      </Card>
    </div>
  ));
  return <React.Fragment>{reviewContents}</React.Fragment>;
};

export default MovieReviews;
