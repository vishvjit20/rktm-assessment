import axios from "axios";
import {
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
} from "./constants";

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_USERS_REQUEST });
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_ALL_USERS_FAILURE,
      payload: err.response.data.message,
    });
  }
};
