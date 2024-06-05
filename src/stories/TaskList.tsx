import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Task, TaskItem } from "./TaskItem";

export const initialTasks = [
  {
    title: "Dishwashingg",
    description: "Wash and dry dishes, pots, pans, and utensils",
    completed: false,
  },
  {
    title: "Laundry",
    description: "Wash, dry, fold, and put away clothes and linens.",
    completed: false,
  },
  {
    title: "Vacuuming",
    description: "Vacuum carpets, rugs, and floors throughout the house",
    completed: false,
  },
  {
    title: "Dusting",
    description: "Dust furniture, shelves, and other surfaces ",
    completed: false,
  },
];

export const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const sortTasks = (tasks: TaskItem[]) => {
    // use array.sort
    return tasks.sort((task1, task2) => {
      // implement sort
      if (task1.completed && !task2.completed) {
        // if task 1 is true and task 2 is false, move task 1 to left
        return -1;
      }
      if (!task1.completed && task2.completed) {
        // if task 1 is false and task 2 is true, move task 1 to right
        return 1;
      } else {
        // keep task where it is
        return 0;
      }
    });
  };

  function updateTaskAtIndex(targetedIndex: number) {
    // map over all the tasks
    const newTasks = tasks.map((task, mapIndex) => {
      if (targetedIndex == mapIndex)
        return { ...task, completed: !task.completed };
      return task;
    });
    const sortedTasks = sortTasks(newTasks);
    setTasks(sortedTasks);
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {tasks.map((task, idx) => (
        <Task task={task} toggleTask={() => updateTaskAtIndex(idx)} />
      ))}
    </>
  );
};
