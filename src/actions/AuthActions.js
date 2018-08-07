import { AxiosAuth } from "../_utils";
import axios from "axios";
import qs from "qs";
export const LOGIN_ACTIONS = {
  FETCH_FACEBOOK_TOKEN_SUCCESSFUL: "FETCH_FACEBOOK_TOKEN_SUCCESSFUL"
};

// ————— call by actions —————

function fetch_facebook_token_successful(payload) {
  return {
    type: LOGIN_ACTIONS.FETCH_FACEBOOK_TOKEN_SUCCESSFUL,
    payload
  };
}

// ————— call by components —————

export function fetch_facebook_token(AuthData) {
  return async dispatch => {
    const { authResponse } = AuthData;
    try {
      const result = await AxiosAuth.post("/thirdparty/login", {
        protocol: "facebook",
        token: authResponse.accessToken,
        id: authResponse.userID
      });

      console.log("Hello result", result); // log is here
    } catch (error) {
      console.log("fetch_facebook_token", error); // log is here
    }
  };
}
