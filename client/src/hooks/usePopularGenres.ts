import GenreService from "@/services/genre/genre.service";
import { IGenre } from "@/types";
import { useEffect, useState } from "react";

const usePopularGenres = () => {
  const [popularGenres, setPopularGenres] = useState<IGenre[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPopularGenres = async () => {
      try {
        setIsLoading(true);
        const genreService = new GenreService();
        const genres = await genreService.getPopular();
        setPopularGenres(genres);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularGenres();
  }, []);

  return { popularGenres, isLoading };
};

export default usePopularGenres;
