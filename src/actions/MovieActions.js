import { Axios } from "../_utils";
import { shuffle, slice } from "lodash";

export const MOVIE_ACTIONS = {
  FETCH_BY_KEYWORDS_SUCCESSFUL: "FETCH_BY_KEYWORDS_SUCCESSFUL",
  FETCH_POP_MOVIES_SUCCESSFUL: "FETCH_POP_MOVIES_SUCCESSFUL",
  FETCH_MOVIE_DETAIL_SUCCESSFUL: "FETCH_MOVIE_DETAIL_SUCCESSFUL",
  FETCH_NOW_PLAYING_MOVIES_SUCCESSFUL: "FETCH_NOW_PLAYING_MOVIES_SUCCESSFUL",
  EMPTY_MOVIE_DETAIL_SUCCESSFUL: "EMPTY_MOVIE_DETAIL_SUCCESSFUL"
};

// ————— call by actions —————

function fetch_by_keywords_successful(payload) {
  return {
    type: MOVIE_ACTIONS.FETCH_BY_KEYWORDS_SUCCESSFUL,
    payload
  };
}

function fetch_pop_movies_successful(payload) {
  return {
    type: MOVIE_ACTIONS.FETCH_POP_MOVIES_SUCCESSFUL,
    payload
  };
}

function fetch_movie_detail_successful(payload) {
  return {
    type: MOVIE_ACTIONS.FETCH_MOVIE_DETAIL_SUCCESSFUL,
    payload
  };
}

function fetch_now_playing_movies_successful(payload) {
  return {
    type: MOVIE_ACTIONS.FETCH_NOW_PLAYING_MOVIES_SUCCESSFUL,
    payload
  };
}

function empty_movie_detail_successful() {
  return {
    type: MOVIE_ACTIONS.EMPTY_MOVIE_DETAIL_SUCCESSFUL
  };
}

// ————— call by components —————

export function fetch_pop_movies() {
  return async (dispatch, getState) => {
    try {
      const result = await Axios.get("/popular");
      const movies = slice(shuffle(result.data.results), 0, 8);
      dispatch(fetch_pop_movies_successful(movies));
    } catch (error) {
      console.log("fetch_popmovies", error); // log is here
    }
  };
}

export function fetch_now_playing_movies() {
  return async (dispatch, getState) => {
    try {
      const result = await Axios.get("/now_playing");
      const movies = slice(shuffle(result.data.results), 0, 8);
      dispatch(fetch_now_playing_movies_successful(movies));
    } catch (error) {
      console.log("fetch_popmovies", error); // log is here
    }
  };
}

export function fetch_movie_detail(movieId) {
  return async (dispatch, getState) => {
    try {
      const movieDetail = await Axios.get(`/${movieId}`);
      const movieVideo = await Axios.get(`/${movieId}/videos`);
      const movieCasts = await Axios.get(`/${movieId}/credits`);
      const movieReviews = await Axios.get(`/${movieId}/reviews`);
      const movieImages = await Axios.get(`/${movieId}/images`);
      const data = {
        ...movieDetail.data,
        videos: movieVideo.data.results,
        casts: movieCasts.data.cast.slice(0, 9),
        reviews: movieReviews.data.results,
        images: movieImages.data
      };

      console.log("Hello data", data); // log is here
      dispatch(fetch_movie_detail_successful(data));
    } catch (error) {
      console.log("fetch_popmovies", error); // log is here
    }
  };
}

export function empty_movie_detail() {
  return async dispatch => {
    try {
      dispatch(empty_movie_detail_successful());
    } catch (error) {
      console.log("empty_movie_detail", error); // log is here
    }
  };
}
