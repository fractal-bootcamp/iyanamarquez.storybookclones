import React, { useState } from "react";
import "./button.css";
import "../index.css";

interface MessageBubbleProps {
  message: string;
  sentByMe: boolean;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const MessageBubble = ({
  message,
  sentByMe,
  ...props
}: MessageBubbleProps) => {
  return (
    <div
      className="rounded-2xl bg-zinc-200 px-4 py-4 mt-2 w-5/6 flex flex-col "
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
