import { AxiosAuth } from "../_utils";
export const MEMBER_ACTIONS = {
  FETCH_PROFILE_SUCCESSFUL: "FETCH_PROFILE_SUCCESSFUL",
  MEMBER_LOGOUT_SUCCESSFUL: "MEMBER_LOGOUT_SUCCESSFUL",
  UPDATE_LOGING_REQUEST_SUCCESSFUL: "UPDATE_LOGING_REQUEST_SUCCESSFUL",
  ADD_MOVIE_TO_FAVORITE_SUCCESSFUL: "ADD_MOVIE_TO_FAVORITE_SUCCESSFUL"
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

function add_movie_to_favorite_successful() {
  return {
    type: MEMBER_ACTIONS.ADD_MOVIE_TO_FAVORITE_SUCCESSFUL
  };
}

function update_loging_request_successful(loginStatus) {
  return {
    type: MEMBER_ACTIONS.UPDATE_LOGING_REQUEST_SUCCESSFUL,
    loginStatus
  };
}

// ————— call by components —————

export function fetch_profile(token) {
  return async dispatch => {
    try {
      const { data } = await AxiosAuth.get(`/user`, {
        headers: {
          authorization: token
        }
      });
      dispatch(fetch_profile_successful(data));
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

export function add_movie_to_favorite(movie_id) {
  return async dispatch => {
    const token = localStorage.getItem("MStoken"); // how to validate if token is valid ?
    if (token) {
      await AxiosAuth.post(
        `/favorite`,
        { movie_id },
        {
          headers: {
            authorization: token
          }
        }
      );
    } else {
      dispatch(update_loging_request(true));
    }
    // dispatch(add_movie_to_favorite_successful());
  };
}
