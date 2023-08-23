import { API_URL } from "@/configs/api.config";
import { saveTokensStorage } from "@/services/auth/auth.helper";
import { IAuthResponse } from "@/store/user/user.interface";

import axios from "axios";
import Cookies from "js-cookie";

// const instance = axios.create({
//   baseURL: API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default instance;

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (config.headers && accessToken) {
    console.log("Axios request config зашло в условие");
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  console.log("Axios request config", config);
  return config;
});

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    console.log("Axios response error - error", error);
    const originalRequest = error.config;
    console.log("Axios response error - original request", originalRequest);
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      console.log("Axios response error зашло в условие!")
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<IAuthResponse>(
          `${API_URL}/auth/refresh`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${Cookies.get("refreshToken")}`,
            },
          }
        );

        localStorage.setItem("accessToken", response.data.tokens.accessToken);
        return instance.request(originalRequest);
      } catch (e) {
        console.log("НЕ АВТОРИЗОВАН");
        console.log(e);
      }
    }
    console.log("Axios response error не зашло в условие!")
    throw error;
  }
);

export default instance;
