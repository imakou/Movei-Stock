import { Axios } from "../_utils";
import { shuffle, slice, cloneDeep } from "lodash";

export const MOVIE_ACTIONS = {
  FETCH_POP_MOVIES_SUCCESSFUL: "FETCH_POP_MOVIES_SUCCESSFUL",
  FETCH_MOVIE_DETAIL_SUCCESSFUL: "FETCH_MOVIE_DETAIL_SUCCESSFUL",
  FETCH_NOW_PLAYING_MOVIES_SUCCESSFUL: "FETCH_NOW_PLAYING_MOVIES_SUCCESSFUL",
  FETCH_MORE_MOVIES_SUCCESSFUL: "FETCH_MORE_MOVIES_SUCCESSFUL",
  SEARCH_MOVIES_SUCCESSFUL: "SEARCH_MOVIES_SUCCESSFUL",
  UPDATE_KEYWORD_SUCCESSFUL: "UPDATE_KEYWORD_SUCCESSFUL",
  EMPTY_SEARCH_MOVIES_SUCCESSFUL: "EMPTY_SEARCH_MOVIES_SUCCESSFUL",
  EMPTY_MOVIE_DETAIL_SUCCESSFUL: "EMPTY_MOVIE_DETAIL_SUCCESSFUL"
};

// ————— call by actions —————

function fetch_pop_movies_successful(movies) {
  const moviesList = slice(shuffle(movies), 0, 8);
  const popMovies = moviesList.map(e => {
    return {
      id: e.id,
      vote_average: e.vote_average,
      title: e.title,
      poster_path: e.poster_path,
      overview: e.overview,
      release_date: e.release_date
    };
  });

  return {
    type: MOVIE_ACTIONS.FETCH_POP_MOVIES_SUCCESSFUL,
    popMovies
  };
}

function fetch_movie_detail_successful(movie) {
  const moiveDetail = {
    backdrop_path: movie.backdrop_path,
    budget: movie.budget,

    id: movie.id,
    overview: movie.overview,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    revenue: movie.revenue,
    runtime: movie.runtime,
    title: movie.title,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
    videos: movie.videos.map(v => ({
      id: v.id,
      key: v.key,
      name: v.name,
      site: v.site,
      size: v.size,
      type: v.type
    })),
    casts: movie.casts.map(c => ({
      cast_id: c.cast_id,
      character: c.character,
      credit_id: c.credit_id,
      gender: c.gender,
      id: c.id,
      name: c.name,
      profile_path: c.profile_path
    })),
    reviews: movie.reviews.map(r => ({
      author: r.author,
      content: r.content,
      id: r.id,
      url: r.url
    })),
    images: {
      id: movie.images.id,
      backdrops: movie.images.backdrops.map(b => ({
        file_path: b.file_path,
        height: b.height,
        vote_average: b.vote_average,
        vote_count: b.vote_count,
        width: b.width
      })),
      posters: movie.images.posters.map(p => ({
        file_path: p.file_path,
        height: p.height,
        vote_average: p.vote_average,
        vote_count: p.vote_count,
        width: p.width
      }))
    },
    genres: movie.genres.map(g => ({
      id: g.id,
      name: g.name
    }))
  };
  return {
    type: MOVIE_ACTIONS.FETCH_MOVIE_DETAIL_SUCCESSFUL,
    moiveDetail
  };
}

function fetch_now_playing_movies_successful(movies) {
  const moviesList = slice(shuffle(movies), 0, 8);
  const nowPlayingMovies = moviesList.map(e => {
    return {
      id: e.id,
      vote_average: e.vote_average,
      title: e.title,
      poster_path: e.poster_path,
      backdrop_path: e.backdrop_path,
      overview: e.overview,
      release_date: e.release_date
    };
  });
  return {
    type: MOVIE_ACTIONS.FETCH_NOW_PLAYING_MOVIES_SUCCESSFUL,
    nowPlayingMovies
  };
}

function search_movies_successful(Moviedata) {
  const { total_pages, results } = Moviedata;
  const searchedMovies = results.map(e => {
    return {
      id: e.id,
      vote_average: e.vote_average,
      title: e.title,
      poster_path: e.poster_path,
      backdrop_path: e.backdrop_path,
      overview: e.overview,
      release_date: e.release_date
    };
  });
  return {
    type: MOVIE_ACTIONS.SEARCH_MOVIES_SUCCESSFUL,
    searchedMovies,
    total_pages
  };
}

function update_keyword_successful(keyWord) {
  return {
    type: MOVIE_ACTIONS.UPDATE_KEYWORD_SUCCESSFUL,
    keyWord
  };
}

function empty_movie_detail_successful() {
  return {
    type: MOVIE_ACTIONS.EMPTY_MOVIE_DETAIL_SUCCESSFUL
  };
}

function empty_search_movies_successful() {
  return {
    type: MOVIE_ACTIONS.EMPTY_SEARCH_MOVIES_SUCCESSFUL
  };
}

function fetch_more_movies_successful(movieSet) {
  const { curMovies, newMovies } = movieSet;
  const newMovieSet = curMovies.concat(
    newMovies.map(m => ({
      id: m.id,
      vote_average: m.vote_average,
      title: m.title,
      poster_path: m.poster_path,
      backdrop_path: m.backdrop_path,
      overview: m.overview,
      release_date: m.release_date
    }))
  );

  return {
    type: MOVIE_ACTIONS.FETCH_MORE_MOVIES_SUCCESSFUL,
    newMovieSet
  };
}

// ————— call by components —————

export function fetch_pop_movies() {
  return async dispatch => {
    try {
      const result = await Axios.get("/movie/popular");
      dispatch(fetch_pop_movies_successful(result.data.results));
    } catch (error) {
      console.log("fetch_popmovies", error); // log is here
    }
  };
}

export function fetch_now_playing_movies() {
  return async dispatch => {
    try {
      const result = await Axios.get("/movie/now_playing");
      dispatch(fetch_now_playing_movies_successful(result.data.results));
    } catch (error) {
      console.log("fetch_popmovies", error); // log is here
    }
  };
}

export function fetch_movie_detail(movieId) {
  return async dispatch => {
    try {
      // Mark
      const movieDetail = await Axios.get(`/movie/${movieId}`);
      const movieVideo = await Axios.get(`/movie/${movieId}/videos`);
      const movieCasts = await Axios.get(`/movie/${movieId}/credits`);
      const movieReviews = await Axios.get(`/movie/${movieId}/reviews`);
      const movieImages = await Axios.get(`/movie/${movieId}/images`);
      const data = {
        ...movieDetail.data,
        videos: movieVideo.data.results,
        casts: movieCasts.data.cast.slice(0, 9),
        reviews: movieReviews.data.results,
        images: movieImages.data
      };
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

export function empty_search_movies() {
  return async dispatch => {
    try {
      dispatch(empty_search_movies_successful());
    } catch (error) {
      console.log("empty_movie_detail", error); // log is here
    }
  };
}

export function search_movies(keyWord) {
  return async dispatch => {
    try {
      const { data } = await Axios.get(`/search/movie?query=${keyWord}`);
      const { results, total_pages } = data;
      // Mark
      dispatch(search_movies_successful({ results, total_pages }));
      dispatch(update_keyword(keyWord));
    } catch (error) {
      console.log("search_movie", error); // log is here
    }
  };
}

export function fetch_more_movies(keyWord, page) {
  return async (dispatch, getState) => {
    try {
      //Mark. Needs the getState to get state.
      let curMovies = cloneDeep(getState().movies.searchedMovies);
      const { data } = await Axios.get(`/search/movie?query=${keyWord}&page=${page}`);
      const newMovies = data.results;
      const movieSet = { curMovies, newMovies };

      dispatch(fetch_more_movies_successful(movieSet, getState));
    } catch (error) {
      console.log("search_movie", error); // log is here
    }
  };
}

export function update_keyword(keyWord) {
  return async dispatch => {
    try {
      dispatch(update_keyword_successful(keyWord));
    } catch (error) {
      console.log("search_movie", error); // log is here
    }
  };
}
