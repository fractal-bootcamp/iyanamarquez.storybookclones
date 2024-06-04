import React, { useState } from "react";
import "./button.css";
import "../index.css";

interface MessageBubbleProps {
  message: string;
  sentByMe: boolean;
  prevMessageByMe: boolean;
  index: number;
  styling: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const MessageBubble = ({
  message,
  sentByMe,
  prevMessageByMe,
  index,
  styling,
  ...props
}: MessageBubbleProps) => {
  // is it the first message by user (in a group)
  // is it the last message by user (in a group)
  // is the user me or them

  // everything else should be square
  //   if (firstByUser ) round top
  //   if (lastByUser ) round bottom
  //   if me ? send it to the right : send it to the left (round opposite edges)

  //
  const newMessage = "rounded-tl-lg rounded-tr-lg rounded-bl-lg";
  const middleMessage = "rounded-none";
  const lastMessage = "rounded-br-lg rounded-bl-lg rounded-tl-lg ";

  return (
    <div
      className={
        `px-4 py-4 mt-2 w-5/6 flex flex-col  ` +
        `${index == 0 ? newMessage : " "} + ${styling}`
      }
      style={
        sentByMe
          ? {
              backgroundColor: "#D9D9D9",
            }
          : { backgroundColor: "#74C2FF" }
      }
    >
      <p className="font-medium	">{message}</p>
    </div>
  );
};
