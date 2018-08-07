import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Tabs } from "antd";
import LoginSignIn from "./LoginSignIn";
import LoginSignUp from "./LoginSignUp";
const TabPane = Tabs.TabPane;

class LoginModal extends Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <Button disabled onClick={this.showModal}>
          Login
        </Button>
        <Modal
          footer={null}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={360}
        >
          <div id="LoginForm">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Sign In" key="1">
                <LoginSignIn />
              </TabPane>
              <TabPane tab="Create One" key="2">
                <LoginSignUp />
              </TabPane>
            </Tabs>
          </div>
        </Modal>
      </div>
    );
  }
}

LoginModal.propTypes = {};

export default LoginModal;
