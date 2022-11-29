import React from "react";

const SearchItems = ({ title, tagDelete }) => {
  const tagHandler = (e) => {
    tagDelete(e);
  };

  return (
    <li className="bg-[#b6e1e370] rounded-[4px]  font-semibold text-[#318181e0] flex items-baseline gap-2 pl-2">
      {title}
      <span
        className=" cursor-pointer text-white bg-[#318181e0] hover:transition-all transition-all hover:duration-700 duration-700  right-0 top-0 bottom-0 px-2 pt-1 rounded-r-[4px] hover:bg-zinc-900 float-right"
        onClick={(e) => tagHandler(e)}
      >
        X
      </span>
    </li>
  );
};

export default SearchItems;
