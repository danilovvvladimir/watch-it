import { getGenresUrl } from "@/configs/api.config";
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
};
