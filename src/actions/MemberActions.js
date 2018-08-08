import { AxiosAuth } from "../_utils";
export const MEMBER_ACTIONS = {
  FETCH_PROFILE_SUCCESSFUL: "FETCH_PROFILE_SUCCESSFUL",
  MEMBER_LOGOUT_SUCCESSFUL: "MEMBER_LOGOUT_SUCCESSFUL"
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

export function member_logout(token) {
  return async dispatch => {
    localStorage.removeItem("MStoken");
    dispatch(member_logout_successful());
  };
}
