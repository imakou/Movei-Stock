import { MOVIE_ACTIONS } from "../actions/MovieActions";

const initialState = {
  popMovies: [],
  currentMoive: null
};

export const movies = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIE_ACTIONS.FETCH_POP_MOVIES_SUCCESSFUL:
      return {
        ...state,
        popMovies: payload
      };

    case MOVIE_ACTIONS.FETCH_MOVIE_DETAIL_SUCCESSFUL:
      return {
        ...state,
        currentMoive: payload
      };

    default:
      return {
        ...state
      };
  }
};
