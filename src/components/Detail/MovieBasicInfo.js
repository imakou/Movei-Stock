import React from "react";
import { Collapse, Icon } from "antd";
import PropTypes from "prop-types";
import numeral from "numeral";
import { getTimeFromMins } from "../../_utils";

const Panel = Collapse.Panel;

const MovieBasicInfo = props => {
  const { data } = props;
  const rate = rate => {
    let rateCss = { fontSize: "20px" };
    if (rate <= 4) {
      return <Icon style={rateCss} type="frown-o" />;
    } else if (rate <= 6) {
      return <Icon style={rateCss} type="meh-o" />;
    } else if (rate > 6) {
      return <Icon style={rateCss} type="smile-o" />;
    }
  };

  return (
    <div>
      <h4>Movie's Info</h4>
      <Collapse bordered={false} defaultActiveKey={["1", "2", "3", "4", "5", "6", "7"]}>
        <Panel showArrow={false} header="Title" key="1">
          <p className="mb-0">{data.title}</p>
        </Panel>
        <Panel showArrow={false} header="Release Date" key="2">
          <p className="mb-0">{`${data.release_date}`}</p>
          <span>({data.status})</span>
        </Panel>
        <Panel showArrow={false} header="Budget" key="3">
          <p className="mb-0">
            {data.budget === 0 ? "N/A" : numeral(data.budget).format("$0,0")}
          </p>
        </Panel>
        <Panel showArrow={false} header="Revenue" key="4">
          <p className="mb-0">
            {data.revenue === 0 ? "N/A" : numeral(data.revenue).format("$0,0")}
          </p>
        </Panel>
        <Panel showArrow={false} header="Runtime" key="5">
          <p className="mb-0">{getTimeFromMins(data.runtime)}</p>
        </Panel>
        <Panel showArrow={false} header="Rate" key="6">
          <p className="mb-0">
            {rate(data.vote_average)} / {data.vote_average}
          </p>
        </Panel>
        <Panel showArrow={false} header="Genres" key="7">
          <div className="mb-0">
            {data.genres.map(e => (
              <div className="pr-1" key={e.id}>
                <span className="badge badge-secondary font-weight-light">{e.name}</span>
              </div>
            ))}
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

MovieBasicInfo.propTypes = {
  data: PropTypes.object.isRequired
};

export default MovieBasicInfo;
