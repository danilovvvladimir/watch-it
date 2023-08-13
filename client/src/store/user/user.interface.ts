import { IUser } from "@/types";

export interface IUserState {
  email: string;
  password: string;
}
export interface ITokens {
  accessToken: string;
  refreshToken: string;
}
export interface IInitialState {
  user: IUserState | null;
  isLoading: LoadingStatus;
}

export enum LoadingStatus {
  LOADING = "loading",
  SUCCESS = "success",
  FAILURE = "failure",
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface IAxiosResponseErrorData {
  statusCode: number;
  error: string;
  message: string;
}

export interface IAuthResponse {
  user: IUser;
  tokens: ITokens;
}
