import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button } from "antd";
const FormItem = Form.Item;

class LoginSignUp extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  handleConfirmEmail = (rule, value, callback) => {
    console.log("Hello value", value); // log is here
    const { getFieldValue } = this.props.form;
    if (value === undefined) {
      callback("email is empty！");
    } else if (value && value !== getFieldValue("email")) {
      callback("email doesn't match！");
    }

    // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
    callback();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your username!", type: "email" }]
          })(<Input prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Email" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator("re-email", {
            rules: [{ required: true, message: "Please input your username!", validator: this.handleConfirmEmail }]
          })(<Input prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Re-type Email" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign Up
          </Button>
        </FormItem>
      </Form>
    );
  }
}

LoginSignUp.propTypes = {
  form: PropTypes.object
};
const WrappedNormalLoginForm = Form.create()(LoginSignUp);

export default WrappedNormalLoginForm;
