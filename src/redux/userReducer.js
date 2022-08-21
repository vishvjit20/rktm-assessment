import {
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
} from "./constants";

const initialState = {
  users: [],
  loading: false,
  error: false,
  errorMsg: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
        loading: true,
        error: true,
        users: [],
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};
