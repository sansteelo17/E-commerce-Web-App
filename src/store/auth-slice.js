import { createSlice } from "@reduxjs/toolkit";

const token =
  localStorage.getItem("token") !== null
    ? JSON.parse(localStorage.getItem("token"))
    : null;

const isLoggedIn =
  localStorage.getItem("isLoggedIn") !== null
    ? JSON.parse(localStorage.getItem("isLoggedIn"))
    : null;

const initialState = {
  authDropIsActive: false,
  isLoggedIn: isLoggedIn,
  token: token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAuthDrop(state) {
      state.authDropIsActive = !state.authDropIsActive;
    },
    loginUser(state, action) {
      const userId = action.payload;
      state.token = userId;
      state.isLoggedIn = !!state.token;
      localStorage.setItem("token", JSON.stringify(state.token));
      localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
    },
    logoutUser(state) {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { toggleAuthDrop, loginUser, logoutUser } = authSlice.actions;

export default authSlice;
