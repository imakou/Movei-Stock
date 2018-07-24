import { MOVIE_ACTIONS } from "../actions/MovieActions";

const initialState = {
  keyWord: "",
  popMovies: [],
  nowPlayingMovies: [],
  searchedMovies: [],
  searchedMoviesTotalPage: undefined,
  currentMovie: null
};

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_ACTIONS.FETCH_POP_MOVIES_SUCCESSFUL:
      return {
        ...state,
        popMovies: action.popMovies
      };

    case MOVIE_ACTIONS.FETCH_NOW_PLAYING_MOVIES_SUCCESSFUL:
      return {
        ...state,
        nowPlayingMovies: action.payload
      };

    case MOVIE_ACTIONS.FETCH_MOVIE_DETAIL_SUCCESSFUL:
      return {
        ...state,
        currentMovie: action.payload
      };

    case MOVIE_ACTIONS.EMPTY_MOVIE_DETAIL_SUCCESSFUL:
      return {
        ...state,
        currentMovie: null
      };
    case MOVIE_ACTIONS.SEARCH_MOVIES_SUCCESSFUL:
      return {
        ...state,
        searchedMovies: action.payload.data,
        searchedMoviesTotalPage: action.payload.page
      };

    case MOVIE_ACTIONS.FETCH_MORE_MOVIES_SUCCESSFUL:
      return {
        ...state,
        searchedMovies: action.payload
      };

    case MOVIE_ACTIONS.UPDATE_KEYWORD_SUCCESSFUL:
      return {
        ...state,
        keyWord: action.payload
      };

    case MOVIE_ACTIONS.EMPTY_SEARCH_MOVIES_SUCCESSFUL:
      return {
        ...state,
        searchedMovies: [],
        searchedMoviesTotalPage: initialState.searchedMoviesTotalPage
      };

    default:
      return {
        ...state
      };
  }
};
