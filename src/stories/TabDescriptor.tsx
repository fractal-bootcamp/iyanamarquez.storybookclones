import React, { useState } from "react";
import "./button.css";
import "../index.css";

interface TabDescriptorProps {
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
export const TabDescriptor = ({
  title,
  backgroundColor,
  link,
  description,
  ...props
}: TabDescriptorProps) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const [currUser, setCurrUser] = useState(0);

  const names = [
    {
      id: 0,
      name: "Nicki",
      img: "https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "A 28-year-old software engineer who loves AI, hiking, and sci-fi novels. Enjoys traveling and trying new recipes.",
    },
    {
      id: 1,
      name: "jake",
      img: "https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "A 35-year-old graphic designer who creates digital art, plays guitar, and practices yoga. Tech and gaming enthusiast.",
    },
    {
      id: 2,
      name: "Akame",
      img: "https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "fake desc",
    },
  ];
  const toggleActive = (e) => {
    console.log("curr id:", e.target.id);
    setActiveIndex(e.target.id);
    setCurrUser(names[e.target.id]);
  };

  const users = [
    {
      id: 1,
      name: "Nicki",
      img: "https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "A 28-year-old software engineer who loves AI, hiking, and sci-fi novels. Enjoys traveling and trying new recipes.",
    },
    {
      id: 2,
      name: "jake",
      img: "https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "A 35-year-old graphic designer who creates digital art, plays guitar, and practices yoga. Tech and gaming enthusiast.",
    },
    {
      id: 3,
      name: "Akame",
      img: "https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "fake desc",
    },
  ];

  const result = users.filter((word) => word.id - 1 == activeIndex);
  console.log("result", result);

  return (
    <div style={{ backgroundColor: "#F5F5F5" }} className="text-black	">
      {/* nav tool */}
      <div className="mb-6 flex flex-row justify-around items-center py-2 rounded-2xl">
        {names.map((x, index) => {
          console.log(index);
          return (
            <button
              className=" font-semibold py-2 px-4 rounded shadow"
              style={activeIndex == index ? { backgroundColor: "white" } : null}
              onClick={toggleActive}
              //   index={index}
              name={x.name}
              id={index.toString()}
            >
              {x.name}{" "}
            </button>
          );
        })}
      </div>
      {/* bottom section */}
      {result.map((user, index) => {
        console.log(user.id, activeIndex);
        return (
          <div
            className="shadow-2xl shadow-inner shadow-gray-400 flex flex-col items-center bg-white	 justify-center  text-center px-4 rounded-xl"
            style={{ width: 460, height: 350 }}
            hidden={user.id.toString() == activeIndex.toString() ? false : true}
          >
            <img
              className="rounded-full w-48 mt-4"
              style={{ width: 200, height: 200 }}
              src={user.img}
            ></img>
            <p className="font-medium mt-6	text-lg p-4">{user.desc}</p>
          </div>
        );
      })}

      {/*
       */}
    </div>
  );
};
