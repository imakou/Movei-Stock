import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import SearchBar from "../components/Nav/SearchBar";
import LoginSection from "../components/Nav/LoginSection";
import { connect } from "react-redux";
import * as MovieActions from "../actions/MovieActions";
import * as AuthActions from "../actions/AuthActions";
import * as MemberActions from "../actions/MemberActions";
import { withRouter } from "react-router-dom";

class Nav extends Component {
  componentDidMount() {
    this.props.check_token();
  }
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

                <button
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
              </div>
              <LoginSection
                showLoginModal={this.props.showLoginModal}
                update_loging_request={this.props.update_loging_request}
                member_logout={this.props.member_logout}
                profile={this.props.profile}
                fetch_facebook_token={this.props.fetch_facebook_token}
                history={this.props.history}
              />
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
  update_keyword: PropTypes.func,
  check_token: PropTypes.func,
  member_logout: PropTypes.func,
  showLoginModal: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    searchedMovies: state.movies.searchedMovies,
    profile: state.member.profile,
    showLoginModal: state.member.loginRequired
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
    },
    check_token: () => {
      dispatch(AuthActions.check_token());
    },
    member_logout: () => {
      dispatch(MemberActions.member_logout());
    },
    update_loging_request: loginStatus => {
      dispatch(MemberActions.update_loging_request(loginStatus));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Nav)
);
