"use client";

import { ChangeEvent, FC, useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";

import SearchList from "./SearchList/SearchList";
import { MovieService } from "@/services/movie.service";
import Input from "../UI/Input/Input";
import axios from "@/utils/axios";

const Search: FC = async () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  // const { isSuccess, data: popularMovies } = useQuery(
  //   ["search movie list", debouncedSearch],
  //   () => MovieService.getMovies(debouncedSearch),
  //   {
  //     select: ({ data }) => data,
  //     enabled: !!debouncedSearch,
  //   }
  // );

  const data = await MovieService.getMovies();
  console.log(data);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Search..."
        className="input-wrapper__input"
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* {isSuccess && <SearchList movies={popularMovies || []} />} */}
    </div>
  );
};

export default Search;
