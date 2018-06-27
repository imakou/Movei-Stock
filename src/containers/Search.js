import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchFilter from "../components/Search/SearchFilter";
import SearchResults from "../components/Search/SearchResults";

class Search extends Component {
  render() {
    return (
      <div className="container">
        <SearchFilter />
        <SearchResults />
      </div>
    );
  }
}

Search.propTypes = {};

export default Search;
