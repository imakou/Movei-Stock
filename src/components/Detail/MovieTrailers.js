import React, { Component } from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";
import ModalVideo from "react-modal-video";

class MovieTrailers extends Component {
  state = {
    key: "",
    visible: false,
    isOpen: false
  };

  showModal = key => {
    this.setState({
      key,
      visible: true,
      isOpen: true
    });
  };

  handleCancel = () => {
    // const f = document.getElementsByClassName("ant-modal-body")[0];
    // const element = document.getElementById("YouTubeIframe");
    // // f.removeChild(element);
    // element.remove();
    // console.log("Hello f", f); // log is here

    this.setState({
      visible: false,
      key: "",
      isOpen: false
    });
  };

  changeKey = key => {
    this.setState({ key }, () => console.log("Hello this.state", this.state));
  };

  renderTrailers = () => {
    const { data } = this.props;
    return data.map(e => {
      return (
        <div key={e.id} className="col-md-4 col-sm-12 mb-2 ">
          <div className="OverFlowHidden border" onClick={() => this.showModal(e.key)}>
            <img
              src={`https://img.youtube.com/vi/${e.key}/0.jpg`}
              alt=""
              className="img-fluid hoverPoint imgScale"
            />
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.renderTrailers()}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.state.key}
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    );
  }
}

MovieTrailers.propTypes = {};

export default MovieTrailers;
