import { API_URL, getGenresUrl } from "@/configs/api.config";
import { IGenre } from "@/types/movies.types";
import defaultAxios, { AxiosInstance } from "axios";

class GenreService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = defaultAxios.create({
      baseURL: API_URL + "/genres/",
    });
  }

  async getPopularGenres(limit: number = 4) {
    const response = await this.axiosInstance.get<IGenre[]>("", {
      params: {
        limit,
      },
    });

    return response.data;
  }

  async getGenreIdBySlug(slug: string) {
    return this.axiosInstance.get<IGenre>(`by-slug/${slug}`);
  }
}

export default GenreService;
