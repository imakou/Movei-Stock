import React, { Component } from "react";
import PropTypes from "prop-types";
import ModalVideo from "react-modal-video";

class MovieTrailers extends Component {
  state = {
    key: "",
    isOpen: false
  };

  showModal = key => {
    this.setState({
      key,
      isOpen: true
    });
  };

  renderTrailers = () => {
    const { trailerData } = this.props;
    return trailerData.map(e => {
      return (
        <div key={e.id} className="col-6 col-sm-6 col-md-4 mb-2 ">
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

MovieTrailers.propTypes = {
  trailerData: PropTypes.array.isRequired
};

export default MovieTrailers;
