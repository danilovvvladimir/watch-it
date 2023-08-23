import { API_URL } from "@/configs/api.config";
import { IAuthResponse } from "@/store/user/user.interface";
import axios from "@/utils/axios";
import { removeTokensStorage, saveToStorage } from "./auth.helper";
import { Cookie } from "next/font/google";
import Cookies from "js-cookie";
import defaultAxios, { AxiosInstance } from "axios";

class AuthService {
  axiosInstance: AxiosInstance;

  constructor() {
    // this.axiosInstance = defaultAxios.create({
    //   baseURL: API_URL + "/auth",
    // });
    this.axiosInstance = axios;
  }

  async register(username: string, email: string, password: string) {
    const response = await this.axiosInstance.post<IAuthResponse>(
      "auth/register",
      {
        email,
        password,
        username,
      }
    );

    if (response.data.tokens.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  }

  async login(email: string, password: string) {
    const response = await this.axiosInstance.post<IAuthResponse>(
      "auth/login",
      {
        email,
        password,
      }
    );

    console.log("LOGIN response: ", response);

    if (response.data.tokens.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  }

  logout() {
    removeTokensStorage();
    localStorage.removeItem("user");
  }

  async getNewTokens() {
    const refreshToken = Cookies.get("refreshToken");

    const response = await defaultAxios.get<IAuthResponse>(
      `${API_URL}/auth/refresh`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );

    if (response.data.tokens.accessToken && response.data.tokens.refreshToken) {
      saveToStorage(response.data);
    }

    return response;
  }
}

export default AuthService;
