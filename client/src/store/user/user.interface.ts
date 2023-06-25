import { IUser } from "@/types/user.types";

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

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser & {
    isAdmin: boolean;
  };
}
