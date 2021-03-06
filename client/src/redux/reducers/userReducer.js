import { AUTH, LOGOUT } from "../types/userTypes";

function userReducer(state = {}, action) {
  switch (action.type) {
    case AUTH:
      return { name: action.payload, isAuth: true };
    case LOGOUT:
      return { name: "", isAuth: false };
    default:
      return state;
  }
}

export default userReducer;
