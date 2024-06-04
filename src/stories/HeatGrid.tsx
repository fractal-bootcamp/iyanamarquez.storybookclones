import React from "react";
import "./button.css";
import "../index.css";

interface HeatGridProps {
  /**
   * Is this the principal call to action on the page?
   */
  title?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  link?: string;
  /**
   * Button contents
   */
  description: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const HeatGrid = ({
  title,
  backgroundColor,
  link,
  description,
  ...props
}: HeatGridProps) => {
  const colors = ["#3E5FCC", "#D9E2FA", "#D9D9D9", "#9EB0E5", "#BFCBEE"];
  const daysOfWeek = [
    { day: "Mon" },
    { day: "Tues" },
    { day: "Weds" },
    { day: "Thurs" },
    { day: "Fri" },
    { day: "Sat" },
    { day: "Sun" },
  ];
  const rows = 5;
  const items = [];
  for (let i = 0; i < 35; i++) {
    items.push("");
  }
  function getRandomInt(max) {
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
      <div className="grid grid-cols-7 gap-4	">
        {items.map((x) => {
          return (
            <div
              style={{ backgroundColor: `${colors[getRandomInt(4)]}` }}
              className="w-16 h-16"
            ></div>
          );
        })}
      </div>
    </div>
  );
};
