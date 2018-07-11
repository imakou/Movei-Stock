import React, { PureComponent } from "react";
import Autosuggest from "react-autosuggest";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Icon, Button, Rate } from "antd";
import { getRate } from "../../_utils";
import moment from "moment";
let timeout = null;

class SearchBar extends PureComponent {
  state = {
    keyWord: "",
    tempKeyWord: "",
    suggestions: [],
    showMask: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.searchedMovies.length !== prevState.suggestions.length) {
      return { suggestions: nextProps.searchedMovies.slice(0, 5) };
    } else {
      return null;
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      keyWord: newValue,
      tempKeyWord: newValue,
      showMask: true
    });
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (newValue === "") {
        this.props.empty_search_movies();
        this.props.update_keyword("");
      } else {
        this.props.search_movies(newValue);
      }
    }, 500);
  };

  onKeyDown = event => {
    const { keyWord } = this.state;
    if (event.key === "Enter") {
      this.setState({ showMask: false });
      this.props.history.push(`/search/${keyWord}`);
      this.onSuggestionsClearRequested();
    }
  };

  handleMore = () => {
    const { tempKeyWord } = this.state;
    this.props.history.push(`/search/${tempKeyWord}`);
  };

  handleDisMask = () => {
    this.onSuggestionsClearRequested();
    this.props.empty_search_movies();
  };
  renderSuggestion = suggestion => {
    const BGImage = {
      backgroundImage: `url("https://image.tmdb.org/t/p/w300${suggestion.backdrop_path}")`
    };
    return (
      <Link to={`/movie/${suggestion.id}`}>
        <div
          onClick={() => this.onSuggestionsClearRequested()}
          className="row no-gutters SearchBarMovieCard d-flex align-items-end"
          style={BGImage}
        >
          <div className="col-12 SearchBarMovieCardCaption">
            <span>{suggestion.title}</span>
            <div className="SearchBarMovieCardCaptionTitle d-flex justify-content-between">
              <span className="SearchBarMovieCardCaptionReleaseDate ml-1">
                {moment(suggestion.release_date).format("YYYY")}
              </span>
              <Rate
                className="mr-1"
                disabled
                allowHalf
                value={getRate(suggestion.vote_average)}
              />
            </div>
          </div>
        </div>
      </Link>
    );
  };

  onSuggestionsFetchRequested = () => {};

  onSuggestionsClearRequested = () => {
    this.setState({
      keyWord: "",
      suggestions: [],
      showMask: false
    });
  };

  getSuggestionValue = suggestion => {
    this.setState({ keyWord: suggestion.title, suggestions: [] });
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
          <Button className="ml-1" onClick={this.handleMore}>
            <Icon type="search" />
            {this.state.keyWord ? "More" : "SEARCH"}
          </Button>
        </div>
        <div style={{ ...mask }} onClick={this.handleDisMask} className="fullMask" />
      </React.Fragment>
    );
  }
}

SearchBar.propTypes = {
  search_movies: PropTypes.func
};

export default SearchBar;
