import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu, Icon, Avatar, Dropdown } from "antd";
import LoginModal from "./LoginModal";

class LoginSection extends Component {
  render() {
    const content = (
      <Menu style={{ width: "150px" }}>
        <Menu.Item key="1">
          <Icon type="user" /> Account
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
          <Icon type="info-circle-o" />
          <span onClick={() => this.props.history.push(`/member`)}> Summary</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <Icon type="poweroff" />{" "}
          <span onClick={this.props.member_logout}> Log Out</span>
        </Menu.Item>
      </Menu>
    );
    const { profile } = this.props;
    const profileIcon = profile ? { src: profile.cover } : { icon: "user" };
    return profile ? (
      <div className="ml-4 d-flex align-items-center LoginSectionIcon">
        <Dropdown overlay={content} placement="bottomCenter">
          <Avatar size={45} {...profileIcon} />
        </Dropdown>
      </div>
    ) : (
      <div className="ml-4 d-flex align-items-center">
        <LoginModal
          showLoginModal={this.props.showLoginModal}
          update_loging_request={this.props.update_loging_request}
          fetch_facebook_token={this.props.fetch_facebook_token}
        />
      </div>
    );
  }
}

LoginSection.propTypes = {
  update_loging_request: PropTypes.func,
  fetch_facebook_token: PropTypes.func,
  showLoginModal: PropTypes.bool
};

export default LoginSection;
