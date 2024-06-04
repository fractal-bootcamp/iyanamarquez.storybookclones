import React from "react";
import "./button.css";
import "../index.css";

interface HeatGridProps {
  colors: string[];
  numberOfRows: number;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const HeatGrid = ({ colors, numberOfRows, ...props }: HeatGridProps) => {
  const daysOfWeek = [
    { day: "Mon" },
    { day: "Tues" },
    { day: "Weds" },
    { day: "Thurs" },
    { day: "Fri" },
    { day: "Sat" },
    { day: "Sun" },
  ];
  const items = [];
  for (let i = 0; i < daysOfWeek.length * numberOfRows; i++) {
    items.push("");
  }
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div>
      <div className="grid grid-cols-7 gap-4 justify-items-center	 ">
        {daysOfWeek.map((day) => {
          return <div className=""> {day.day}</div>;
        })}
      </div>
      {/* grid */}
      <div className="grid grid-cols-7 gap-4">
        {items.map((x) => {
          return (
            <div
              style={{
                backgroundColor: `${colors[getRandomInt(colors.length - 1)]}`,
              }}
              className="w-16 h-16"
            ></div>
          );
        })}
      </div>
    </div>
  );
};
