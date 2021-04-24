import { LOGIN, LOGOUT } from "./userReducer";

export const login = (uid, email) => (dispatch) =>
  dispatch({ type: LOGIN, payload: { uid, email } });

export const logout = () => (dispatch) => dispatch({ type: LOGOUT });
