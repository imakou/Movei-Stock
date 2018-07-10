import React, { Component } from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
const Search = Input.Search;

class SearchFilter extends Component {
  state = {
    keyWord: "",
    prevProps: this.props
  };

  static getDerivedStateFromProps(props, state) {
    const prevProps = state.prevProps;
    const keyWord = prevProps.keyWord !== props.keyWord ? props.keyWord : state.keyWord;
    return {
      prevProps: props,
      keyWord
    };
  }

  handleChangeKeyWord = event => {
    const keyWord = event.target.value;
    this.setState({
      keyWord
    });
  };
  handleSearch = keyWord => {
    this.setState(
      {
        keyWord
      },
      this.props.search_movies(keyWord)
    );
  };
  render() {
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-center">
            <div className="mt-5 w-50">
              <Search
                placeholder="input search text"
                size="large"
                value={this.state.keyWord}
                onChange={this.handleChangeKeyWord}
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
