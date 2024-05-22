/* eslint-disable react/no-unescaped-entities */
"use client";

import Search from "./Nav/Search";
import Link from "next/link";
import topics from "../data/tba.json";
import { Button } from "./ui/button";
import { useSearchParams } from "next/navigation";

const TBA = () => {
  const urlParams = useSearchParams();
  const search: string = (urlParams.get("search") || "").toLowerCase();

  const filterdTopics = topics.filter((i) => {
    if (i.title.toLowerCase().includes(search)) {
      return true;
    }
  });
  const getTopicLink = (id: number) => {
    let nlink: string = `/amharic/${id}`;
    if (search) {
      nlink += `?search=${search}`;
    }
    return nlink;
  };
  return (
    <main className="flex flex-col flex-1">
      <section className="wrapper py-12 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="title_2 text-sky-800">ስለ ቲቢ የበለጠ ይወቁ</h1>
          {/* <Search /> */}
        </div>
        {search && (
          <div className="flex flex-col">
            <h3 className="opacity-90">Seacrh Results for "{search}"</h3>
            <div className="text-base opacity-80 flex items-center justify-between">
              <p>{filterdTopics.length} results</p>
              <Button variant={"link"} className="text-gray-900 p-0">
                Clear Search
              </Button>
            </div>
          </div>
        )}
        <ul className="flex flex-col mt-3">
          {filterdTopics.length ? (
            filterdTopics.map((item) => (
              <li key={item.title} className="flex">
                <Link
                  href={getTopicLink(item.id)}
                  className="p-4 bg-gray-800/[0.045] hover:translate-x-[1px] transition-all px-6 border-l-[6px] hover:bg-gray-800/[0.05] border-primary/70 text-sky-900 border-b transition-400 border-b-gray-700/20 group w-full"
                >
                  <span className=" group-hover:text-primary">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))
          ) : (
            <span className="text-base opacity-85">No Search Results.</span>
          )}
        </ul>
      </section>
    </main>
  );
};
export default TBA;
