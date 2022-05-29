import React, { ReactElement } from "react";
import Card from "./Card";

const Board = (): ReactElement => {
  const cards: string[] = ["1", "2", "3", "4", "-", "5", "6", "7", "8"];

  return (
    <div
      id="square-wrapper"
      className="mt-8 h-0 relative sm:w-[80%] sm:pb-[80%] md:w-[60%] md:pb-[60%] lg:w-[50%] lg:pb-[50%] 
        xl:w-[40%] xl:pb-[40%] xxl:w-[30%] xxl:pb-[30%]"
    >
      <div
        id="square-shadow"
        className="absolute bg-game-light-blue top-[60%] left-0 w-full h-full grid grid-flow-row grid-cols-3 grid-rows-3 gap-1 p-1"
        style={{
          transform: "perspective(1.75em) rotateX(30deg) scale(0.7, 0.25)",
          filter: "blur(7.5em)",
        }}
      />

      <div
        id="square-content"
        className="absolute grid w-full h-full grid-flow-row grid-cols-3 grid-rows-3 gap-1 p-1 select-none"
      >
        {cards.map((card) => (
          <Card key={card} cardContent={card} />
        ))}
      </div>
    </div>
  );
};

export default Board;
