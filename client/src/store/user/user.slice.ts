import { createSlice } from "@reduxjs/toolkit";
import { IInitialState, LoadingStatus } from "./user.interface";
import { getLocalStorage } from "@/utils/getLocalStorage";
import { checkAuth, login, logout, register } from "./user.actions";

const initialState: IInitialState = {
  isLoading: LoadingStatus.SUCCESS,
  user: getLocalStorage("user"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Register
    builder.addCase(register.pending, (state) => {
      state.isLoading = LoadingStatus.LOADING;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.isLoading = LoadingStatus.SUCCESS;
      state.user = payload.user;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoading = LoadingStatus.FAILURE;
      state.user = null;
    });
    // Login
    builder.addCase(login.pending, (state) => {
      state.isLoading = LoadingStatus.LOADING;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = LoadingStatus.SUCCESS;
      state.user = payload.user;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = LoadingStatus.FAILURE;
      state.user = null;
    });
    // Logout
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = LoadingStatus.SUCCESS;
      state.user = null;
    });
    // CheckAuth
    builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });
  },
});

export const userReducer = userSlice.reducer;
