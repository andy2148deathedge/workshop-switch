'use client';

import { useState } from "react";

const Switch = ({
  isRight = false,
  isDisabled = false,
  onSwitch = () => {},
  label = "",
  colorRight = "bg-white",
  colorLeft = "bg-white",
  bgColorRight = "bg-slate-400",
  bgColorLeft = "bg-slate-400",
  animation = "transition duration-300 ease-in",
}) => {
  const [isOnRight, setIsOnRight] = useState(isRight);

  const handleClick = () => {
    if (!isDisabled) {
      setIsOnRight((prev) => !prev);
      onSwitch();
    }
  };

  return (
    <div className={isDisabled ? "w-20 pt-2 opacity-25" : "w-20 pt-2"}>
      <div
        className={
          isOnRight
            ? `relative w-[60px] h-[28px] rounded-full ${bgColorRight}`
            : `relative w-[60px] h-[28px] rounded-full ${bgColorLeft}`
        }
        onClick={handleClick}
        role="button"
      >
        <div
          className={
            isOnRight
              ? `absolute top-[2px] right-[2px] w-[24px] h-[24px] rounded-full ${colorRight} ${animation}`
              : `absolute top-[2px] left-[2px] w-[24px] h-[24px] rounded-full ${colorLeft} ${animation}`
          }
        />
      </div>
      {label.length > 0 && (
        <span
          className={
            isOnRight ? `text-xs text-white font-extrabold` : `text-xs`
          }
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default Switch