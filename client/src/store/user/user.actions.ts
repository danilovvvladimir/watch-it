import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAuthResponse,
  IAxiosResponseErrorData,
  ILoginRequest,
  IRegisterRequest,
} from "./user.interface";
import AuthService from "@/services/auth/auth.service";
import { isAxiosError, AxiosError } from "axios";

const authService = new AuthService();

export const register = createAsyncThunk<IAuthResponse, IRegisterRequest>(
  "auth/register",
  async ({ username, email, password }, thunkApi) => {
    try {
      const response = await authService.register(username, email, password);

      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      const errData = err.response?.data as IAxiosResponseErrorData;

      return thunkApi.rejectWithValue(errData.message);
    }
  }
);

export const login = createAsyncThunk<IAuthResponse, ILoginRequest>(
  "auth/login",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await authService.login(email, password);

      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      const errData = err.response?.data as IAxiosResponseErrorData;

      return thunkApi.rejectWithValue(errData.message);
    }
  }
);

export const checkAuth = createAsyncThunk<IAuthResponse>(
  "auth/checkAuth",
  async (_, thunkApi) => {
    try {
      const response = await authService.getNewTokens();
      return response.data;
    } catch (error) {
      // jwt expired check???
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  authService.logout();
});
