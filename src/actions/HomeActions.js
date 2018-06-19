import { Axios } from "../_utils";
import { shuffle, slice } from "lodash";

const HOME_ACTIONS = {
  FETCH_BY_KEYWORDS_SUCCESSFUL: "FETCH_BY_KEYWORDS_SUCCESSFUL"
};

// ————— call by actions —————

function FETCH_BY_KEYWORDS_SUCCESSFUL(payload) {
  return {
    type: HOME_ACTIONS.FETCH_BY_KEYWORDS_SUCCESSFUL,
    payload
  };
}

// ————— call by components —————

export function fetch_by_keywords() {
  return async (dispatch, getState) => {
    try {
      const result = await Axios.get("/popular");
      const random = slice(shuffle(result.data.results), 0, 8);
      console.log("Hello results", random); // log is here
    } catch (error) {
      console.log("fetch_by_keywords", error); // log is here
    }
  };
}
