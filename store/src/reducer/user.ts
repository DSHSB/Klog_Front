import { AnyAction } from "redux";
import { login_info } from "../interface/user";

const userState: login_info = {
  login: false,
  user: null,
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const userReducer = (state: login_info = userState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: true,
        user: action.data,
      };
    case LOGOUT:
      return {
        ...state,
        login: false,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
