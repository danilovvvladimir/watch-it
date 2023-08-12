import { API_URL } from "@/configs/api.config";
import { IMovie } from "@/types";
import defaultAxios, { AxiosInstance } from "axios";

class MovieService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = defaultAxios.create({
      baseURL: API_URL + "/movies",
    });
  }

  async getAll(searchTerm?: string) {
    const response = await this.axiosInstance.get<IMovie[]>("/", {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });

    return response.data;
  }

  async getByGenre(genreId: string) {
    const response = await this.axiosInstance.post<IMovie[]>("/by-genres", {
      genreIds: [genreId],
    });

    return response.data;
  }

  async getBySlug(slug: string) {
    const response = await this.axiosInstance.get<IMovie>(`/by-slug/${slug}`);
    return response.data;
  }
}

export default MovieService;
