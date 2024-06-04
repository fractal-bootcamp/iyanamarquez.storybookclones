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

  const toggleActive = (e) => {
    console.log("curr id:", e.target.id);
    setActiveIndex(e.target.id);
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
      img: "https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "A 35-year-old graphic designer who creates digital art, plays guitar, and practices yoga. Tech and gaming enthusiast.",
    },
    {
      id: 3,
      name: "Akame",
      img: "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
  ];

  const result = users.filter((word) => word.id - 1 == activeIndex);
  console.log("result", result);

  return (
    <div className="text-black	">
      {/* nav tool */}
      <div
        style={{ backgroundColor: "#F5F5F5" }}
        className="mb-2 flex flex-row justify-around items-center rounded-2xl py-2 px-4"
      >
        {users.map((x, index) => {
          console.log(index);
          return (
            <button
              className=" font-semibold py-4 px-4 rounded-2xl w-36"
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
