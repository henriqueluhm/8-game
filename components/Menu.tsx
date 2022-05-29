import React, { ReactElement } from "react";
import Restart from "./Restart";

const Menu = (): ReactElement => {
  return (
    <div className="flex justify-between sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%]  xxl:w-[30%] text-2xl">
      <div className="w-1/3">
        <span className="cursor-pointer w-fit">...</span>
      </div>
      <span className="w-1/3 text-center">47 moves</span>
      <div className="w-1/3 text-right">
        <button
          type="button"
          className="mt-1 transition-transform rounded-full duration-300 w-fit h-fit hover:-rotate-[360deg]"
        >
          <Restart />
        </button>
      </div>
    </div>
  );
};

export default Menu;
