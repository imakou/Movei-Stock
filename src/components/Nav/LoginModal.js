import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Tabs } from "antd";
import LoginSignIn from "./LoginSignIn";
// import LoginSignUp from "./LoginSignUp";
const TabPane = Tabs.TabPane;

class LoginModal extends Component {
  state = { visible: this.props.showLoginModal };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.showLoginModal !== prevState.visible) {
      return { visible: nextProps.showLoginModal };
    } else {
      return null;
    }
  }

  showModal = () => {
    this.props.update_loging_request(true);
  };

  handleOk = () => {
    this.setState({
      visible: false
    });
  };

  handleCancel = () => {
    this.props.update_loging_request(false);
  };

  render() {
    return (
      <div>
        <Button onClick={this.showModal}>Sign In</Button>
        <Modal footer={null} visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} width={360}>
          <div id="LoginForm">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Sign In" key="1">
                <LoginSignIn fetch_facebook_token={this.props.fetch_facebook_token} />
              </TabPane>
              {/* <TabPane tab="Create One" key="2">
                <LoginSignUp />
              </TabPane> */}
            </Tabs>
          </div>
        </Modal>
      </div>
    );
  }
}

LoginModal.propTypes = {
  fetch_facebook_token: PropTypes.func.isRequired
};

export default LoginModal;
