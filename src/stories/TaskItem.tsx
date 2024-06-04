import React, { useState } from "react";
import "./button.css";
import "../index.css";

interface TaskItemProps {
  title?: string;
  backgroundColor?: string;
  selected?: boolean;
  description: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Task = ({
  title,
  backgroundColor,
  selected,
  description,
  ...props
}: TaskItemProps) => {
  const [checked, updateChecked] = useState(true);
  const toggleCheck = () => {
    updateChecked(!checked);
  };
  return (
    <div
      className="border border-solid border-grey rounded  px-10 py-2 w-96 text-nowrap shadow-inner w-auto
	"
      style={checked ? { backgroundColor: backgroundColor } : {}}
    >
      {/* checkbox */}
      <div className="inline-flex items-center">
        <label
          className=" flex items-center p-3 rounded-full cursor-pointer"
          htmlFor="checkbox"
        >
          <input
            type="checkbox"
            id="checkbox"
            value=""
            className="appearance-none w-5 h-5 border rounded checked:bg-emerald-600 "
            onClick={toggleCheck}
            checked={checked}
          />
          <div className="ml-4 ">
            <h1 className="font-normal ">{title}</h1>
            <p className="text-slate-400 text-sm">{description}</p>
          </div>{" "}
        </label>
      </div>
    </div>
  );
};
