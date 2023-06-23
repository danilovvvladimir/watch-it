import { API_URL } from "@/configs/api.config";
import { IMovie } from "@/types/movies.types";
import axios from "@/utils/axios";

export const MovieService = {
  async getMovies(searchTerm?: string) {
    return axios.get<IMovie[]>(`${API_URL}/movies`, {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });
  },
};
