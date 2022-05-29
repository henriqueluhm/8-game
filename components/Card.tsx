import classNames from "classnames";
import React, { ReactElement, useState } from "react";
import Draggable from "react-draggable";

const Card = ({ cardContent }: { cardContent: string }): ReactElement => {
  const [isDragging, setIsDragging] = useState(false);

  const onStartDragging = (): void => {
    setIsDragging(true);
  };

  const onStopDragging = (): void => {
    setIsDragging(false);
  };

  return (
    <Draggable onStart={onStartDragging} onStop={onStopDragging}>
      <div
        className={classNames(
          "flex items-center justify-center col-span-1 row-span-1 transition-shadow duration-150 border-2 rounded-md border-game-light-blue cursor-grab shadow-default hover:shadow-hover",
          { "cursor-grabbing": isDragging }
        )}
        style={{
          textShadow: "0 0 0.20em #0abdc6",
        }}
      >
        {cardContent !== "-" && cardContent}
      </div>
    </Draggable>
  );
};

export default Card;
