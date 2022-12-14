import React from "react";
import ToolsItems from "./ToolsItems";

const Card = ({ data, btnfuncion }) => {
  let tags = [data.role, data.level, ...data.languages, ...data.tools];
  return (
    <div
      className={
        data.id === 1 || data.id === 2
          ? "bg-white px-4 py-4 w-full shadow-lg rounded-md flex border-l-8 border-[#318181e0] max-sm:flex-col"
          : "bg-white px-4 py-4 w-full shadow-lg rounded-md flex max-sm:flex-col"
      }
    >
      <img src={data.logo} alt="" className="mr-5 h-fit max-sm:w-[25%]" />
      <div className="flex flex-col gap-1 w-[80%]">
        <header className="flex items-center gap-4 max-sm:items-baseline">
          <h3 className="text-[#318181e0] text-lg font-bold max-sm:mt-3">
            {data.company}
          </h3>
          <div className="sub-header flex gap-3">
            {data.new && (
              <h4 className="bg-[#318181e0] w-fit text-white px-3 pt-1 rounded-2xl">
                NEW!
              </h4>
            )}

            {data.featured && (
              <h4 className="w-fit text-white px-3 pt-1 rounded-2xl bg-zinc-700">
                FEATURED
              </h4>
            )}
          </div>
        </header>
        <h1 className="text-xl font-semibold text-zinc-800">{data.position}</h1>
        <div className="Details flex gap-3 items-center flex-wrap">
          <p className="text-zinc-400">{data.postedAt}</p>
          <span className="bg-zinc-400 w-1 h-1 rounded-full"></span>
          <p className="text-zinc-400">{data.contract}</p>
          <span className="bg-zinc-400 w-1 h-1 rounded-full"></span>
          <p className="text-zinc-400">{data.location}</p>
        </div>
      </div>
      <div className=" w-full flex items-center justify-end max-sm:justify-start max-sm:mt-5">
        <ul className="flex gap-3 px-5 flex-wrap max-sm:px-0">
          {tags.map((item, index) => (
            <ToolsItems key={index} btnfuncion={btnfuncion} items={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
