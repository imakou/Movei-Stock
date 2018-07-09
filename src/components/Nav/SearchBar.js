import React, { Component, PureComponent } from "react";
import Autosuggest from "react-autosuggest";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Icon, Button } from "antd";
let timeout = null;

class SearchBar extends PureComponent {
  state = {
    keyWord: "",
    suggestions: [],
    showMask: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.searchedMovies.length !== prevState.suggestions) {
      return { suggestions: nextProps.searchedMovies.slice(0, 5) };
    } else {
      return null;
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      keyWord: newValue,
      showMask: true
    });
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (newValue === "") {
        this.props.empty_search_movies();
      } else {
        this.props.search_movies(newValue);
      }
    }, 500);
  };

  onKeyDown = event => {
    const { keyWord } = this.state;
    if (event.key === "Enter") {
      this.setState({ showMask: false });
      // console.log("Hello this.props", this.props); // log is here
      this.props.history.push(`/search/${keyWord}`);
      this.onSuggestionsClearRequested();
    }
  };

  renderSuggestion = suggestion => {
    const BGImage = {
      backgroundImage: `url("https://image.tmdb.org/t/p/w300${suggestion.backdrop_path}")`
    };
    return (
      <Link to={`/movie/${suggestion.id}`}>
        <div className="row no-gutters SearchBarMovieCard" style={BGImage}>
          <div className="col-8">
            <span>{suggestion.title}</span>
          </div>
        </div>
      </Link>
    );
  };

  onSuggestionsFetchRequested = () => {};

  onSuggestionsClearRequested = () => {
    this.setState({
      value: "",
      suggestions: [],
      showMask: false
    });
  };
  getSuggestionValue = suggestion => {
    console.log("Hello getSuggestionValue"); // log is here
    this.setState({ value: suggestion.title, suggestions: [] });
    return suggestion.title;
  };
  render() {
    const { keyWord, suggestions } = this.state;
    const inputProps = {
      placeholder: "Movie's name or keyword...",
      value: keyWord,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown
    };
    const mask = this.state.showMask
      ? { visibility: "visible", opacity: 0.88 }
      : { visibility: "hidden", opacity: 0 };

    return (
      <React.Fragment>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
        <div className="SearchBarButton">
          <Link to={`/search/${keyWord}`}>
            <Button className="ml-1" onClick={() => this.setState({ keyWord: "" })}>
              <Icon type="search" />More
            </Button>
          </Link>
        </div>
        <div style={{ ...mask }} className="fullMask" />
      </React.Fragment>
    );
  }
}

SearchBar.propTypes = {
  search_movies: PropTypes.func
};

export default SearchBar;
