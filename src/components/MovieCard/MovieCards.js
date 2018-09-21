import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs, Badge, Card, Icon, Avatar, Spin } from "antd";
import MovieBlock from "./MovieBlock";

const TabPane = Tabs.TabPane;

class MovieCards extends Component {
  render() {
    return (
      <section className="bg-light">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-12">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Now Playing" key="1">
                  <MovieBlock
                    add_movie_to_favorite={this.props.add_movie_to_favorite}
                    data={this.props.nowPlayingMovies}
                    favoriteList={this.props.favoriteList}
                    delete_favorite_movie={this.props.delete_favorite_movie}
                  />
                </TabPane>
                <TabPane tab="Popular" key="2">
                  <MovieBlock
                    add_movie_to_favorite={this.props.add_movie_to_favorite}
                    data={this.props.popMovies}
                    favoriteList={this.props.favoriteList}
                    delete_favorite_movie={this.props.delete_favorite_movie}
                  />
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

MovieCards.propTypes = {
  fetch_pop_movies: PropTypes.func,
  add_movie_to_favorite: PropTypes.func,
  popMovies: PropTypes.array
};

export default MovieCards;
