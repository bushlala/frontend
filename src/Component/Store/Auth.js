import { createSlice } from "@reduxjs/toolkit";
import { AuthAPI } from "../../Services/Auth.Service";
//import toast from 'react-hot-toast';
// import { login as loginApi } from "../api/auth";
//import { toast } from 'react-toastify';
const initialState = {
  user: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return Object.assign({}, state, { user: action.payload });
    }
  }
});

export default slice.reducer;

export const isAuthSelector = state => state.auth.user !== null;

export function login(loginData) {
  return async function (dispatch) {
    return await AuthAPI.login(loginData).then((response) => {
      console.log("login response", response);
      if (response.status) {
        // navigate("/login");
        console.warn(response);
        localStorage.setItem('userData', JSON.stringify(response));
        dispatch(slice.actions.setUser(response));
        return response;
      } else {
        return response;
      }
    });
  }
}
