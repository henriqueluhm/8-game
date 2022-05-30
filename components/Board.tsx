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
    { content: "2", canDrag: true },
    { content: "3", canDrag: false },
    { content: "4", canDrag: true },
    { content: "-", canDrag: true },
    { content: "5", canDrag: true },
    { content: "6", canDrag: false },
    { content: "7", canDrag: true },
    { content: "8", canDrag: false },
  ]);

  function shuffle(array: ICard[]) {
    let currentIndex = array.length,
      randomIndex;

    const newArray = array.map(item => ({...item, canDrag: false}))

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[currentIndex],
      ];
    }

    if (newArray[0].content === '-') {
      console.log('caso 0')
      newArray[0].canDrag = true
      newArray[1].canDrag = true
      newArray[3].canDrag = true

    } else if (newArray[1].content === '-') {
      console.log('caso 1')
      newArray[0].canDrag = true
      newArray[1].canDrag = true
      newArray[2].canDrag = true
      newArray[4].canDrag = true

    } else if (newArray[2].content === '-') {
      console.log('caso 2')
      newArray[1].canDrag = true
      newArray[2].canDrag = true
      newArray[5].canDrag = true

    } else if (newArray[3].content === '-') {
      console.log('caso 3')
      newArray[0].canDrag = true
      newArray[3].canDrag = true
      newArray[4].canDrag = true
      newArray[6].canDrag = true

    } else if (newArray[4].content === '-') {
      console.log('caso 4')
      newArray[1].canDrag = true
      newArray[4].canDrag = true
      newArray[3].canDrag = true
      newArray[5].canDrag = true
      newArray[7].canDrag = true

    } else if (newArray[5].content === '-') {
      console.log('caso 5')
      newArray[2].canDrag = true
      newArray[5].canDrag = true
      newArray[4].canDrag = true
      newArray[8].canDrag = true

    } else if (newArray[6].content === '-') {
      console.log('caso 6')
      newArray[3].canDrag = true
      newArray[6].canDrag = true
      newArray[7].canDrag = true

    } else if (newArray[7].content === '-') {
      console.log('caso 7')
      newArray[4].canDrag = true
      newArray[7].canDrag = true
      newArray[6].canDrag = true
      newArray[8].canDrag = true
      
    } else if (newArray[8].content === '-') {
      console.log('caso 8')
      newArray[5].canDrag = true
      newArray[8].canDrag = true
      newArray[7].canDrag = true
    }

    return newArray;
  }

  const onClickRestart = (): void => {
    const newCards: ICard[] = shuffle(cards);
    setCards(newCards.map((item) => item));
    console.log("newCards", newCards);
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
