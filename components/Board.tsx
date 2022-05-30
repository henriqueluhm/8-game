import React, { ReactElement, useState } from "react";
import Card from "./Card";
import Restart from "./Restart";

export interface ICard {
  content: string;
  canDrag: boolean;
}

const Board = (): ReactElement => {
  const [cards, setCards] = useState<ICard[]>([
    { content: "1", canDrag: false },
    { content: "2", canDrag: false },
    { content: "3", canDrag: false },
    { content: "4", canDrag: false },
    { content: "-", canDrag: false },
    { content: "5", canDrag: false },
    { content: "6", canDrag: false },
    { content: "7", canDrag: false },
    { content: "8", canDrag: false },
  ]);

  function shuffle(array: ICard[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const onClickRestart = (): void => {
    const newCards: ICard[] = shuffle(cards);
    setCards(newCards.map((item) => item));
    console.log("shuffle", shuffle(cards));
  };

  return (
    <>
      <div className="flex justify-between sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%]  xxl:w-[30%] text-2xl">
        <div className="w-1/3">
          <span className="cursor-pointer w-fit">...</span>
        </div>
        <span className="w-1/3 text-center">47 moves</span>
        <div className="w-1/3 text-right">
          <button
            onClick={onClickRestart}
            type="button"
            className="mt-1 transition-transform rounded-full duration-300 w-fit h-fit hover:-rotate-[360deg]"
          >
            <Restart />
          </button>
        </div>
      </div>
      <div
        id="square-wrapper"
        className="mt-8 h-0 relative sm:w-[80%] sm:pb-[80%] md:w-[60%] md:pb-[60%] lg:w-[50%] lg:pb-[50%] 
        xl:w-[40%] xl:pb-[40%] xxl:w-[30%] xxl:pb-[30%]"
      >
        <div
          id="square-shadow"
          className="absolute bg-game-light-blue top-[60%] left-0 w-full h-full grid grid-flow-row grid-cols-3 grid-rows-3 gap-1 p-1"
          style={{
            transform: "perspective(1.75em) rotateX(30deg) scale(0.9, 0.25)",
            filter: "blur(7.5em)",
          }}
        />

        <div
          id="square-content"
          className="absolute grid w-full h-full grid-flow-row grid-cols-3 grid-rows-3 gap-1 p-1 select-none"
        >
          {cards.map((card) => (
            <Card key={card.content} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Board;
