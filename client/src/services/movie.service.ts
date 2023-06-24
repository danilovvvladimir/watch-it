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
  async getMoviesByGenre(genreId: string) {
    return axios.post<IMovie[]>(`${API_URL}/movies/by-genres`, {
      genreIds: [genreId],
    });
  },
  async getMoviesBySlug(slug: string) {
    return axios.get<IMovie>(`${API_URL}/movies/by-slug/${slug}`);
  },
};
