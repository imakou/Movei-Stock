import React from "react";
import StackGrid, { transitions } from "react-stack-grid";
import { Modal } from "antd";
import { shuffle } from "lodash";
const { scaleDown } = transitions;

class MovieImages extends React.Component {
  state = {
    visible: false,
    imgUrl: null,
    imgArr: []
  };
  componentDidMount() {
    this.getImgArr();
  }

  getImgArr = () => {
    const { images } = this.props;
    const imgArr = [];
    shuffle(images.backdrops)
      .splice(0, 15)
      .forEach(e => {
        imgArr.push(e.file_path);
      });

    shuffle(images.posters)
      .splice(0, 15)
      .forEach(e => {
        imgArr.push(e.file_path);
      });
    this.setState({
      imgArr: shuffle(imgArr)
    });
  };
  renderImgs = () => {
    return this.state.imgArr.map((e, key) => (
      <div
        key={key}
        className="MovieCard border OverFlowHidden"
        style={{ marginBottom: "8px" }}
        onClick={() => this.showModal(e)}
      >
        <img src={`https://image.tmdb.org/t/p/w500${e}`} alt="" className="img-fluid imgScale" />
      </div>
    ));
  };

  showModal = imgUrl => {
    this.setState({
      visible: true,
      imgUrl
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
      <div className="mb-5">
        <StackGrid monitorImagesLoaded columnWidth={"33.33%"} gutterWidth={8} appeared={scaleDown.appeared}>
          {this.renderImgs()}
        </StackGrid>
        <Modal
          bodyStyle={{ paddingTop: "50px" }}
          visible={this.state.visible}
          onCancel={this.handleClose}
          footer={null}
          width="45vw"
        >
          <img className="img-fluid w-100" src={`https://image.tmdb.org/t/p/original${this.state.imgUrl}`} alt="" />
        </Modal>
      </div>
    );
  }
}

export default MovieImages;
