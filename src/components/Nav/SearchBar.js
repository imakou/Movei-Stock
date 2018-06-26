import React, { Component, PureComponent } from "react";
import Autosuggest from "react-autosuggest";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const languages = [
  {
    name: "Escape Plan 2: Hades",
    year: 1972
  },
  {
    name: "Elm",
    year: 2012
  }
];

let timeout = null;

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.

// Use your imagination to render suggestions.

class SearchBar extends PureComponent {
  state = {
    value: "",
    suggestions: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.searchedMovies.length !== prevState.suggestions) {
      return { suggestions: nextProps.searchedMovies };
    } else {
      return null;
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      this.props.search_movies(newValue);
      // console.log("Hello newValue", newValue); // log is here
    }, 500);
  };
  renderSuggestion = suggestion => {
    return (
      <Link to={`/movie/${suggestion.id}`}>
        <div className="row">
          <div className="col-4">
            <img
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                suggestion.poster_path
              }`}
              alt={suggestion.title}
              className="img-fluid"
            />
          </div>
          <div className="col-8">
            <span>{suggestion.title}</span>
          </div>
        </div>
      </Link>
    );
  };
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = data => {
    console.log("Hello data", data); // log is here
    // this.setState({
    //   suggestions: this.getSuggestions(value)
    // });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = v => {
    console.log("Hello v", v); // log is here
    this.setState({
      value: "",
      suggestions: []
    });
  };
  getSuggestionValue = suggestion => {
    console.log("Hello suggestion", suggestion); // log is here
    this.setState({ value: suggestion.title, suggestions: [] });
    return suggestion.title;
  };
  render() {
    const { value, suggestions } = this.state;
    console.log("Hello suggestions", suggestions); // log is here
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Type a programming language",
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

SearchBar.propTypes = {};

export default SearchBar;
