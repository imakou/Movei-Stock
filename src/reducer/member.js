import { MEMBER_ACTIONS } from "../actions/MemberActions";

const initialState = {
  profile: undefined,
  loginRequired: false
};

/*
 profile:{
  conver:"",
  email:"",
  nickname:"",
 }
*/

export const member = (state = initialState, action) => {
  switch (action.type) {
    case MEMBER_ACTIONS.FETCH_PROFILE_SUCCESSFUL:
      return {
        ...state,
        profile: action.Profile
      };
    case MEMBER_ACTIONS.UPDATE_LOGING_REQUEST_SUCCESSFUL:
      return {
        ...state,
        loginRequired: action.loginStatus
      };
    case MEMBER_ACTIONS.MEMBER_LOGOUT_SUCCESSFUL:
      return {
        ...initialState
      };

    default:
      return {
        ...state
      };
  }
};
