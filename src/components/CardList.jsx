import React from "react";
import Card from "./Card";

const CardList = ({ jobs, btnfuncion }) => {
  return (
    <div className="mt-20 flex flex-col gap-8">
      {jobs.map((item, index) => {
        return <Card key={index} btnfuncion={btnfuncion} data={item} />;
      })}
    </div>
  );
};

export default CardList;
