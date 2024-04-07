"use client";

import { FaSearch } from "react-icons/fa";
import { MdClose, MdSearch } from "react-icons/md";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    update("search");
  };

  const update = (type: "clear" | "search") => {
    let link = "/tuberculosis";
    if (type == "clear") {
      setSearchText(undefined);
    } else if (type == "search") {
      if (searchText) {
        link += `?search=${searchText}`;
      }
      router.push(link);
    }
  };

  return (
    <div className="flex items-center">
      <form className="flex" onSubmit={handleSubmit}>
        <div className="relative flex">
          <Input
            placeholder="Search about TB"
            className=" rounded-none rounded-l-md text-base"
            value={searchText || ""}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <MdClose
              onClick={() => {
                update("clear");
              }}
              className=" absolute top-0 bottom-0 my-auto right-2"
            />
          )}
        </div>
        <button>
          <MdSearch
            size={46}
            className="h-full px-3  text-white bg-black/25 rounded-r-md border border-sky-900/25 border-l-0"
          />
        </button>
      </form>
    </div>
  );
};
export default Search;
