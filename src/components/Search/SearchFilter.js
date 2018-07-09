import React, { Component } from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
const Search = Input.Search;

class SearchFilter extends Component {
  handleSearch = keyWord => {
    this.props.search_movies(keyWord);
  };
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
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="mt-5 w-50">
              <Search
                placeholder="input search text"
                size="large"
                defaultValue={this.props.keyWord}
                onSearch={keyWord => this.handleSearch(keyWord)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SearchFilter.propTypes = {};

export default SearchFilter;
