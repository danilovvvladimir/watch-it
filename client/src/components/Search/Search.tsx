"use client";

// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===
import Input from "../UI/Input/Input";
import SearchList from "./SearchList/SearchList";

// ==> Other imports <===
import "./Search.scss";
import React from "react";
import { MovieService } from "@/services/movie.service";
import { useDebounce } from "@/hooks/useDebounce";

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [isSearchListVisible, setIsSearchListVisible] =
    React.useState<boolean>(true);
  const [data, setData] = React.useState<any>("");
  const searchRef = React.useRef<HTMLInputElement>(null);
  const debouncedSearch = useDebounce(searchTerm, 250);

  React.useEffect(() => {
    const getData = async () => {
      const data = await MovieService.getMovies(searchTerm);
      console.log(data.data);
      setData(data.data);
    };
    if (searchTerm !== "") {
      getData();
    }
  }, [debouncedSearch]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !event.composedPath().includes(searchRef.current)
      ) {
        setIsSearchListVisible(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      className="search"
      ref={searchRef}
      onClick={() => setIsSearchListVisible(true)}
    >
      <label className="input-wrapper">
        <div className="input-wrapper__icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon--filled"
          >
            <path
              d="M21.3187 20.0273L15.232 13.9406C16.1766 12.7195 16.6875 11.2266 16.6875 9.65625C16.6875 7.77656 15.9539 6.01406 14.6273 4.68516C13.3008 3.35625 11.5336 2.625 9.65625 2.625C7.77891 2.625 6.01172 3.35859 4.68516 4.68516C3.35625 6.01172 2.625 7.77656 2.625 9.65625C2.625 11.5336 3.35859 13.3008 4.68516 14.6273C6.01172 15.9562 7.77656 16.6875 9.65625 16.6875C11.2266 16.6875 12.7172 16.1766 13.9383 15.2344L20.025 21.3187C20.0428 21.3366 20.064 21.3508 20.0874 21.3604C20.1107 21.3701 20.1357 21.3751 20.1609 21.3751C20.1862 21.3751 20.2112 21.3701 20.2345 21.3604C20.2578 21.3508 20.279 21.3366 20.2969 21.3187L21.3187 20.2992C21.3366 20.2814 21.3508 20.2602 21.3604 20.2369C21.3701 20.2135 21.3751 20.1885 21.3751 20.1633C21.3751 20.138 21.3701 20.113 21.3604 20.0897C21.3508 20.0664 21.3366 20.0452 21.3187 20.0273ZM13.3688 13.3688C12.375 14.3602 11.0578 14.9062 9.65625 14.9062C8.25469 14.9062 6.9375 14.3602 5.94375 13.3688C4.95234 12.375 4.40625 11.0578 4.40625 9.65625C4.40625 8.25469 4.95234 6.93516 5.94375 5.94375C6.9375 4.95234 8.25469 4.40625 9.65625 4.40625C11.0578 4.40625 12.3773 4.95 13.3688 5.94375C14.3602 6.9375 14.9062 8.25469 14.9062 9.65625C14.9062 11.0578 14.3602 12.3773 13.3688 13.3688Z"
              fill="black"
            />
          </svg>
        </div>
        <Input
          type="text"
          placeholder="Search..."
          className="input-wrapper__input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>

      {searchTerm && isSearchListVisible && <SearchList movies={data || []} />}
    </div>
  );
};

export default Search;
