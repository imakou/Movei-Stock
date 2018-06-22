import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";

class ImageModal extends Component {
  state = {
    visible: false,
    imgUrl: null
  };
  showModal = key => {
    this.setState({
      visible: true
    });
  };

  handleClose = () => {
    this.setState({
      visible: false,
      imgUrl: null
    });
  };
  render() {
    return (
      <Modal visible={this.state.visible} onCancel={this.handleCancel} footer={null}>
        <img
          src="https://image.tmdb.org/t/p/w500//rznXLCZ3N1w9cktdoKsaVRSIuxf.jpg"
          alt=""
        />
      </Modal>
    );
  }
}

ImageModal.propTypes = {};

export default ImageModal;
