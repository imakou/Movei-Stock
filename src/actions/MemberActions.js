import { AxiosAuth, Axios } from "../_utils";
export const MEMBER_ACTIONS = {
  FETCH_PROFILE_SUCCESSFUL: "FETCH_PROFILE_SUCCESSFUL",
  MEMBER_LOGOUT_SUCCESSFUL: "MEMBER_LOGOUT_SUCCESSFUL",
  UPDATE_LOGING_REQUEST_SUCCESSFUL: "UPDATE_LOGING_REQUEST_SUCCESSFUL",
  ADD_MOVIE_TO_FAVORITE_SUCCESSFUL: "ADD_MOVIE_TO_FAVORITE_SUCCESSFUL",
  FETCH_FAVORITE_LIST_SUCCESSFUL: "FETCH_FAVORITE_LIST_SUCCESSFUL",
  FETCH_FAVORITE_LIST_DETAIL_SUCCESSFUL: "FETCH_FAVORITE_LIST_DETAIL_SUCCESSFUL"
};

// ————— call by actions —————

function fetch_profile_successful(profile) {
  const { nickname, email, cover } = profile;
  const Profile = {
    nickname,
    email,
    cover
  };
  return {
    type: MEMBER_ACTIONS.FETCH_PROFILE_SUCCESSFUL,
    Profile
  };
}

function member_logout_successful() {
  return {
    type: MEMBER_ACTIONS.MEMBER_LOGOUT_SUCCESSFUL
  };
}

function fetch_favorite_list_successful(favoriteList) {
  const FavoriteList = [...favoriteList.map(e => e.movie_id)];
  return {
    type: MEMBER_ACTIONS.FETCH_FAVORITE_LIST_SUCCESSFUL,
    FavoriteList
  };
}

function add_movie_to_favorite_successful(favoriteList, movie_id) {
  const updatedFavoriteList = [...favoriteList, movie_id];
  return {
    type: MEMBER_ACTIONS.ADD_MOVIE_TO_FAVORITE_SUCCESSFUL,
    updatedFavoriteList
  };
}

function update_loging_request_successful(loginStatus) {
  return {
    type: MEMBER_ACTIONS.UPDATE_LOGING_REQUEST_SUCCESSFUL,
    loginStatus
  };
}

function fetch_favorite_list_detail_successful(resolvedMovies) {
  const favoriteListDetail = resolvedMovies.map(({ data }) => {
    return {
      id: data.id,
      backdrop_path: data.backdrop_path,
      original_title: data.original_title,
      vote_average: data.vote_average
    };
  });
  console.log("Hello favoriteListDetail", favoriteListDetail); // log is here
  return {
    type: MEMBER_ACTIONS.FETCH_FAVORITE_LIST_DETAIL_SUCCESSFUL,
    favoriteListDetail
  };
}

// ————— call by components —————

export function fetch_profile(token) {
  return async dispatch => {
    try {
      const { data: profile } = await AxiosAuth.get(`/user`, {
        headers: {
          authorization: token
        }
      });
      dispatch(fetch_favorite_list());
      dispatch(fetch_profile_successful(profile));
    } catch (error) {
      console.log("fetch_profile", error); // log is here
      dispatch(member_logout());
    }
  };
}

export function member_logout() {
  return async dispatch => {
    localStorage.removeItem("MStoken");
    dispatch(member_logout_successful());
  };
}

export function update_loging_request(loginStatus) {
  return async dispatch => {
    dispatch(update_loging_request_successful(loginStatus));
  };
}

export function fetch_favorite_list() {
  return async dispatch => {
    try {
      const token = localStorage.getItem("MStoken"); // how to validate if token is valid ?
      const headers = {
        headers: {
          authorization: token
        }
      };
      const { data: favoriteList } = await AxiosAuth.get(`/favorites`, headers);
      dispatch(fetch_favorite_list_successful(favoriteList));
    } catch (error) {
      console.log("Hello fetch_favorite_list", error); // log is here
    }
  };
}

export function fetch_favorite_list_detail(favList) {
  return async (dispatch, getState) => {
    try {
      const fetch_movies = async key => {
        return await Axios.get(`/movie/${key}`);
      };
      const moviesPromises = favList.map(fetch_movies);
      const resolvedMovies = await Promise.all(moviesPromises);
      dispatch(fetch_favorite_list_detail_successful(resolvedMovies));
    } catch (error) {
      console.log("Hello fetch_favorite_list_detail", error); // log is here
    }
  };
}

export function add_movie_to_favorite(movie_id) {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("MStoken"); // how to validate if token is valid ?
      const headers = {
        headers: {
          authorization: token
        }
      };
      const favoriteList = getState().member.favoriteList;
      console.log("Hello favoriteList", favoriteList); // log is here
      if (token) {
        await AxiosAuth.post(`/favorite`, { movie_id: String(movie_id) }, headers);
      } else {
        dispatch(update_loging_request(true));
      }
      dispatch(add_movie_to_favorite_successful(favoriteList, String(movie_id)));
    } catch (error) {
      console.log("Hello add_movie_to_favorite", error); // log is here
    }
  };
}
