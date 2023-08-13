import { API_URL } from "@/configs/api.config";
import { IGenre } from "@/types";
import { ICollection } from "@/types/helpers.types";
import defaultAxios, { AxiosInstance } from "axios";

class GenreService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = defaultAxios.create({
      baseURL: API_URL + "/genres",
    });
  }

  async getAll() {
    const response = await this.axiosInstance.get<IGenre[]>("/");

    return response.data;
  }

  async getBySlug(slug: string) {
    const response = await this.axiosInstance.get<IGenre>(`/by-slug/${slug}`);

    return response.data;
  }

  async getCollection() {
    const response = await this.axiosInstance.get<ICollection[]>(
      "/collections"
    );

    return response.data;
  }
}

export default GenreService;
