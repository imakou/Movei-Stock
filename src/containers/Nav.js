import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import logo from "../logo.svg";
import LoginModal from "../components/Nav/LoginModal";
import SearchBar from "../components/Nav/SearchBar";
import { connect } from "react-redux";
import * as MovieActions from "../actions/MovieActions";
import * as AuthActions from "../actions/AuthActions";
import { withRouter } from "react-router-dom";

function hoverable(WrappedComponent, propName = "hover") {
  return class HoverableComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { hovered: false };
    }

    turnHoverOn() {
      this.setState({ hovered: true });
    }

    turnHoverOff() {
      this.setState({ hovered: false });
    }

    render() {
      const props = { [propName]: this.state.hovered, ...this.props };
      return (
        <div
          onMouseEnter={() => this.turnHoverOn()}
          onMouseLeave={() => this.turnHoverOff()}
        >
          <WrappedComponent {...props} />
        </div>
      );
    }
  };
}

class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light NavContainer">
          <div className="container">
            <div className="w-100 d-flex justify-content-between ml-1">
              <div className="d-flex align-items-center">
                <Link to="/">
                  <img className="NavLogo mr-2" src={logo} alt="" />
                </Link>
                <SearchBar
                  search_movies={this.props.search_movies}
                  empty_search_movies={this.props.empty_search_movies}
                  update_keyword={this.props.update_keyword}
                  history={this.props.history}
                  searchedMovies={this.props.searchedMovies}
                />
                {/* <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button> 
            <div className="ml-4">
              <Dropdown overlay={content} placement="bottomCenter">
                <Avatar size="large" icon="user" />
              </Dropdown>
            </div> */}
              </div>

              <div className="ml-4 d-flex align-items-center">
                <LoginModal fetch_facebook_token={this.props.fetch_facebook_token} />
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

Nav.propTypes = {
  searchedMovies: PropTypes.array,
  search_movies: PropTypes.func,
  empty_search_movies: PropTypes.func,
  update_keyword: PropTypes.func
};

const mapStateToProps = state => {
  return {
    searchedMovies: state.movies.searchedMovies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search_movies: keyWord => {
      dispatch(MovieActions.search_movies(keyWord));
    },
    empty_search_movies: () => {
      dispatch(MovieActions.empty_search_movies());
    },
    update_keyword: keyWord => {
      dispatch(MovieActions.update_keyword(keyWord));
    },
    fetch_facebook_token: AuthData => {
      dispatch(AuthActions.fetch_facebook_token(AuthData));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Nav)
);
