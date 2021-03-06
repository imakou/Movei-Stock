import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button, Checkbox, Divider } from "antd";
const FormItem = Form.Item;

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  FBLogin = value => {
    const THIS = this;
    window.FB.login(
      function(response) {
        const { authResponse } = response;
        if (authResponse) {
          THIS.props.fetch_facebook_token(response);
        }
      },
      { scope: "public_profile,email" }
    );
  };

  commentContent = value => {
    console.log("Hello value", value);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" disabled />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              disabled
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox disabled>Remember me</Checkbox>)}
          {/* <a className="login-form-forgot" href="">
            Forgot password
          </a> */}
          <Button disabled type="primary" htmlType="submit" className="login-form-button">
            Sign In
          </Button>
          <Divider>or</Divider>
          <span className="sb sb-facebook w-100 PointerEffect" onClick={this.FBLogin}>
            Sign in with Facebook
          </span>
        </FormItem>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.object,
  fetch_facebook_token: PropTypes.func.isRequired
};
const WrappedNormalLoginForm = Form.create()(LoginForm);

export default WrappedNormalLoginForm;
