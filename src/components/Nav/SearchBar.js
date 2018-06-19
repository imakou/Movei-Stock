import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  render() {
    return (
      <div className="NavSearchBar d-flex justify-content-end">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2 NavSearchBarInput"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {};

export default SearchBar;
