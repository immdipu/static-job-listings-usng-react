import React from "react";

const ToolsItems = ({ items, btnfuncion }) => {
  const HandleClick = (e) => {
    btnfuncion(e);
  };
  return (
    <li
      className="bg-[#b6e1e370] rounded px-2 pt-1 text-[#318181e0] font-semibold cursor-pointer hover:text-white hover:bg-[#318181e0] hover:transition-all transition-all hover:duration-700 duration-700"
      onClick={(e) => HandleClick(e)}
    >
      {items}
    </li>
  );
};

export default ToolsItems;
