import { API_URL } from "@/configs/api.config";
import { IActor } from "@/types";
import defaultAxios, { AxiosInstance } from "axios";

class ActorService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = defaultAxios.create({
      baseURL: API_URL + "/actors",
    });
  }

  async getAll() {
    const response = await this.axiosInstance.get<IActor[]>("/");

    return response.data;
  }
}

export default ActorService;
