import { API_URL, getGenresUrl } from "@/configs/api.config";
import { IGenre } from "@/types/movies.types";
import axios from "@/utils/axios";

export const GenreService = {
  async getTopFiveGenres(limit: number = 4) {
    return axios.get<IGenre[]>(getGenresUrl(""), {
      params: {
        limit,
      },
    });
  },
  async getGenreIdBySlug(slug: string) {
    return axios.get<IGenre>(`${API_URL}/genres/by-slug/${slug}`);
  },
};
