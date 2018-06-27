import React, { Component } from "react";
import { Form, Input } from "antd";
import PropTypes from "prop-types";
const FormItem = Form.Item;

class SearchFilter extends Component {
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 9 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 }
      }
    };
    return (
      <div className="row">
        <Form className="row">
          <FormItem {...formItemLayout} className="mb-1 col-3" label="Keyword">
            <Input placeholder="large size" />
          </FormItem>
          <FormItem {...formItemLayout} className="mb-1 col-3" label="Year">
            <Input placeholder="large size" />
          </FormItem>
          <FormItem {...formItemLayout} className="mb-1 col-3" label="Genres">
            <Input placeholder="large size" />
          </FormItem>
          <FormItem {...formItemLayout} className="mb-1 col-3" label="Rate">
            <Input placeholder="large size" />
          </FormItem>
        </Form>
      </div>
    );
  }
}

SearchFilter.propTypes = {};

export default SearchFilter;
