import { AxiosAuth, Axios } from "../_utils";
export const MEMBER_ACTIONS = {
  FETCH_PROFILE_SUCCESSFUL: "FETCH_PROFILE_SUCCESSFUL",
  MEMBER_LOGOUT_SUCCESSFUL: "MEMBER_LOGOUT_SUCCESSFUL",
  UPDATE_LOGING_REQUEST_SUCCESSFUL: "UPDATE_LOGING_REQUEST_SUCCESSFUL",
  ADD_MOVIE_TO_FAVORITE_SUCCESSFUL: "ADD_MOVIE_TO_FAVORITE_SUCCESSFUL",
  FETCH_FAVORITE_LIST_SUCCESSFUL: "FETCH_FAVORITE_LIST_SUCCESSFUL",
  DELETE_FAVORITE_MOVIE_SUCCESSFUL: "DELETE_FAVORITE_MOVIE_SUCCESSFUL",
  FETCH_FAVORITE_LIST_DETAIL_SUCCESSFUL: "FETCH_FAVORITE_LIST_DETAIL_SUCCESSFUL",
  UPDATE_FAVORITE_LIST_STATUS_SUCCESSFUL: "UPDATE_FAVORITE_LIST_STATUS_SUCCESSFUL"
};

const token = localStorage.getItem("MStoken"); // how to validate if token is valid ?
const headers = {
  headers: {
    authorization: token
  }
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
  const FavoriteList = favoriteList.map(e => ({ id: e.id, movie_id: e.movie_id }));
  return {
    type: MEMBER_ACTIONS.FETCH_FAVORITE_LIST_SUCCESSFUL,
    FavoriteList
  };
}

function update_favorite_list_status_successful(status) {
  return {
    type: MEMBER_ACTIONS.UPDATE_FAVORITE_LIST_STATUS_SUCCESSFUL,
    status
  };
}

function add_movie_to_favorite_successful(favoriteList, FavObj) {
  // const FavoriteListSet = new Set(favoriteList);
  // FavoriteListSet.add(FavObj.movie_id);
  const isExist = favoriteList.some(m => m.movie_id === FavObj.movie_id);
  const updatedFavoriteList = isExist ? [...favoriteList] : [...favoriteList, FavObj];
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
  return {
    type: MEMBER_ACTIONS.FETCH_FAVORITE_LIST_DETAIL_SUCCESSFUL,
    favoriteListDetail
  };
}

function delete_favorite_movie_successful(favoriteList, movie_id) {
  const FavoriteList = favoriteList.filter(e => String(e.movie_id) !== movie_id);
  return {
    type: MEMBER_ACTIONS.DELETE_FAVORITE_MOVIE_SUCCESSFUL,
    FavoriteList
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
      const { data: favoriteList } = await AxiosAuth.get(`/favorites`, headers);
      if (favoriteList.length !== 0) {
        dispatch(fetch_favorite_list_successful(favoriteList));
      } else {
        dispatch(update_favorite_list_status_successful("null"));
      }
    } catch (error) {
      console.log("Hello fetch_favorite_list", error); // log is here
    }
  };
}

export function fetch_favorite_list_detail(favList) {
  return async dispatch => {
    try {
      const fetch_movies = async ({ movie_id: key }) => {
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
      const favoriteList = getState().member.favoriteList;
      const isNotExist = favoriteList.indexOf(String(movie_id)) === -1;
      if (token && isNotExist) {
        const { id } = await AxiosAuth.post(`/favorite`, { movie_id: String(movie_id) }, headers);
        dispatch(add_movie_to_favorite_successful(favoriteList, { id, movie_id: String(movie_id) }));
      } else {
        dispatch(update_loging_request(true));
      }
    } catch (error) {
      console.log("Hello add_movie_to_favorite", error); // log is here
    }
  };
}

export function delete_favorite_movie(movie_id) {
  return async (dispatch, getState) => {
    try {
      const favoriteList = getState().member.favoriteList;
      const isExist = favoriteList.map(e => e.movie_id).indexOf(String(movie_id)) !== -1;
      if (token && isExist) {
        let { id } = favoriteList.find(e => String(e.movie_id) === String(movie_id));
        await AxiosAuth.delete(`/favorite/${id}`, headers);
        dispatch(delete_favorite_movie_successful(favoriteList, String(movie_id)));
      }
    } catch (error) {
      console.log("Hello add_movie_to_favorite", error); // log is here
    }
  };
}
