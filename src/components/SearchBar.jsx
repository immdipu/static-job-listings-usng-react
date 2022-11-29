import React from "react";
import SearchItems from "./SearchItems";

const SearchBar = ({ tags, tagDelete }) => {
  return (
    <>
      <div className="bg-white relative rounded-md shadow-lg w-full min-h-[3.5rem] mt-[7.7rem] flex justify-between items-center">
        <div className="w-full px-3">
          <ul className="flex gap-5 px-5 ">
            {tags.map((item, index) => {
              return (
                <SearchItems key={index} title={item} tagDelete={tagDelete} />
              );
            })}
          </ul>
        </div>
        <p className="w-[5%]  text-[#5ba4a4] font-semibold hover:underline cursor-pointer text-lg mr-2">
          Clear
        </p>
      </div>
    </>
  );
};

export default SearchBar;
