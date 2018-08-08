import { AxiosAuth } from "../_utils";
import { fetch_profile, member_logout } from "./MemberActions";

export const LOGIN_ACTIONS = {
  FETCH_FACEBOOK_TOKEN_SUCCESSFUL: "FETCH_FACEBOOK_TOKEN_SUCCESSFUL"
};

// ————— call by actions —————

function fetch_facebook_token_successful() {
  return {
    type: LOGIN_ACTIONS.FETCH_FACEBOOK_TOKEN_SUCCESSFUL
  };
}

// ————— call by components —————

export function fetch_facebook_token(AuthData) {
  return async dispatch => {
    const { authResponse } = AuthData;
    try {
      const {
        data: { token }
      } = await AxiosAuth.post("/thirdparty/login", {
        protocol: "facebook",
        token: authResponse.accessToken,
        id: authResponse.userID
      });
      localStorage.setItem("MStoken", token);
      dispatch(fetch_profile(token));
      dispatch(fetch_facebook_token_successful());
    } catch (error) {
      console.log("fetch_facebook_token", error); // log is here
      dispatch(member_logout());
    }
  };
}

export function check_token() {
  return async dispatch => {
    try {
      const token = localStorage.getItem("MStoken");
      if (token) {
        dispatch(fetch_profile(token));
      } else {
        dispatch(member_logout());
      }
    } catch (error) {
      console.log("check_token", error); // log is here
    }
  };
}
