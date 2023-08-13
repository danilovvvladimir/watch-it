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
    this.axiosInstance = defaultAxios.create({
      baseURL: API_URL + "/auth",
    });
  }

  async register(username: string, email: string, password: string) {
    const response = await this.axiosInstance.post<IAuthResponse>("/register", {
      email,
      password,
      username,
    });

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  }

  async login(email: string, password: string) {
    const response = await this.axiosInstance.post<IAuthResponse>("/login", {
      email,
      password,
    });

    if (response.data.accessToken) {
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

    const response = await this.axiosInstance.post<IAuthResponse>(
      "/access-token",
      {
        refreshToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  }
}

export default AuthService;
