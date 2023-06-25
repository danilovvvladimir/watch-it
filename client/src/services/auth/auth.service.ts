import { API_URL } from "@/configs/api.config";
import { IAuthResponse } from "@/store/user/user.interface";
import axios from "@/utils/axios";
import { removeTokensStorage, saveToStorage } from "./auth.helper";
import { Cookie } from "next/font/google";
import Cookies from "js-cookie";

export const AuthService = {
  async register(email: string, password: string) {
    const response = await axios.post<IAuthResponse>(
      `${API_URL}/auth/register`,
      {
        email,
        password,
      }
    );

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  },
  async login(email: string, password: string) {
    const response = await axios.post<IAuthResponse>(`${API_URL}/auth/login`, {
      email,
      password,
    });

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  },

  logout() {
    removeTokensStorage();
    localStorage.removeItem("user");
  },
  async getNewTokens() {
    const refreshToken = Cookies.get("refreshToken");
    const response = await axios.post<IAuthResponse>(
      `${API_URL}/auth/access-token`,
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
  },
};
