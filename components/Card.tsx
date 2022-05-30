import classNames from "classnames";
import React, {
  LegacyRef,
  ReactElement,
  RefObject,
  useRef,
  useState,
} from "react";
import Draggable from "react-draggable";
import { ICard } from "./Board";

const Card = ({ card }: { card: ICard }): ReactElement => {
  const [isDragging, setIsDragging] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const cardRef: LegacyRef<HTMLDivElement> | null = useRef(null);

  const onStartDragging = (): void => {
    setIsDragging(true);
  };

  const onStopDragging = (): void => {
    setIsDragging(false);
  };

  const onHandleClick = (): void => {
    if (!card.canDrag) setIsShaking(true);
  };

  return (
    <Draggable
      onStart={onStartDragging}
      onStop={onStopDragging}
      bounds="parent"
      disabled={!card.canDrag}
      nodeRef={cardRef as unknown as RefObject<HTMLElement>}
    >
      <div
        ref={cardRef}
        onMouseDownCapture={onHandleClick}
        onAnimationEnd={() => setIsShaking(false)}
        className={classNames(
          "flex items-center justify-center col-span-1 row-span-1 transition-shadow duration-150 border-2 rounded-md border-game-light-blue cursor-grab shadow-default hover:shadow-hover",
          { "cursor-grabbing": isDragging, "animate-shake": isShaking }
        )}
        style={{
          textShadow: "0 0 0.20em #0abdc6",
        }}
      >
        {card.content !== "-" && card.content}
      </div>
    </Draggable>
  );
};

export default Card;
