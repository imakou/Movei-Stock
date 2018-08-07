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
    console.log("Hello AuthData", AuthData); // log is here
    const { authResponse } = AuthData;
    console.log("Hello authResponse", authResponse); // log is here
    const formData = {
      protocol: "facebook",
      token: authResponse.accessToken,
      id: authResponse.userID
    };
    try {
      //   const result = await AxiosAuth.post(
      //     "/thirdparty/login",
      //     {
      //       formData
      //     },
      //     {}
      //   );

      axios({
        method: "post",
        url: "https://luckstar77y-movie-server.herokuapp.com/thirdparty/login",
        data: qs.stringify(formData),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(e => {
        console.log("Hello e", e); // log is here
      });
      //   console.log("Hello result", result); // log is here
    } catch (error) {
      console.log("fetch_facebook_token", error); // log is here
    }
  };
}
