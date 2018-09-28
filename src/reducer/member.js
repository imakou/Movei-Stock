import { MEMBER_ACTIONS } from "../actions/MemberActions";

const initialState = {
  profile: undefined,
  loginRequired: false,
  favoriteListStatus: "pending",
  favoriteList: [],
  favoriteListDetail: []
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
    case MEMBER_ACTIONS.ADD_MOVIE_TO_FAVORITE_SUCCESSFUL:
      return {
        ...state,
        favoriteList: action.updatedFavoriteList
      };
    case MEMBER_ACTIONS.FETCH_FAVORITE_LIST_SUCCESSFUL:
      return {
        ...state,
        favoriteList: action.FavoriteList,
        favoriteListStatus: "done"
      };
    case MEMBER_ACTIONS.DELETE_FAVORITE_MOVIE_SUCCESSFUL:
      return {
        ...state,
        favoriteList: action.FavoriteList
      };
    case MEMBER_ACTIONS.FETCH_FAVORITE_LIST_DETAIL_SUCCESSFUL:
      return {
        ...state,
        favoriteListDetail: action.favoriteListDetail
      };
    case MEMBER_ACTIONS.UPDATE_FAVORITE_LIST_STATUS_SUCCESSFUL:
      return {
        ...state,
        favoriteListStatus: action.status
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
