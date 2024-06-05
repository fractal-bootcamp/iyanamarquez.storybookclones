import React, { useState } from "react";
import "./button.css";
import "../index.css";

export interface TaskItem {
  title: string;
  description: string;
  completed: boolean;
}

export function Task({ task, toggleTask }) {
  // implement this
  return (
    <div
      className="border border-solid border-grey rounded  px-10 py-2 w-96 text-nowrap shadow-inner w-auto
	"
      style={task.completed ? { backgroundColor: "#E2FFE5" } : {}}
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
            onClick={toggleTask}
            checked={task.completed}
          />
          <div className="ml-4 ">
            <h1 className="font-normal ">{task.title}</h1>
            <p className="text-slate-400 text-sm">{task.description}</p>
          </div>{" "}
        </label>
      </div>
    </div>
  );
}
