import { Axios } from "../_utils";
import { shuffle, slice } from "lodash";

export const MOVIE_ACTIONS = {
  FETCH_BY_KEYWORDS_SUCCESSFUL: "FETCH_BY_KEYWORDS_SUCCESSFUL",
  FETCH_POP_MOVIES_SUCCESSFUL: "FETCH_POP_MOVIES_SUCCESSFUL",
  FETCH_MOVIE_DETAIL_SUCCESSFUL: "FETCH_MOVIE_DETAIL_SUCCESSFUL"
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

// ————— call by components —————

export function fetch_pop_movies() {
  return async (dispatch, getState) => {
    try {
      const result = await Axios.get("/popular");
      const movies = slice(shuffle(result.data.results), 0, 8);
      // console.log("Hello results", random); // log is here
      dispatch(fetch_pop_movies_successful(movies));
    } catch (error) {
      console.log("fetch_popmovies", error); // log is here
    }
  };
}

export function fetch_movie_detail(movieId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await Axios.get(`/${movieId}`);
      console.log("Hello data", data); // log is here
      // console.log("Hello results", random); // log is here
      dispatch(fetch_movie_detail_successful(data));
    } catch (error) {
      console.log("fetch_popmovies", error); // log is here
    }
  };
}
