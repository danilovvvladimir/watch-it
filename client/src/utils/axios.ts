import { API_URL } from "@/configs/api.config";
import axios from "axios";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// instance.interceptors.request.use((config) => {
//   if (window.localStorage.getItem("token")) {
//     config.headers.Authorization = window.localStorage.getItem("token");
//     // console.log("Config:", config.headers);
//   }
//   return config;
// });

export default instance;
