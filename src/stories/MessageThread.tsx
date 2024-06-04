import React, { useState } from "react";
import "./button.css";
import "../index.css";
import { MessageBubble } from "./MessageBubble";
import { Message, exampleMessages } from "./messages";

interface MessageThreadProps {
  messages: Message[];
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const MessageThread = ({ messages, ...props }: MessageThreadProps) => {
  return (
    <div className="rounded bg-white px-4 py-4 	">
      {messages.map((x) => {
        return (
          <>
            <div className="flex">
              {/* Messages sent by me */}
              {x.sentByMe ? (
                <div className="flex flex-row-reverse">
                  <div>
                    <span className="text-slate-400 text-sm flex justify-center	">
                      {x.user.name}
                    </span>
                    <img
                      className="w-10 h-10 rounded-full ml-4"
                      src="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Rounded avatar"
                    />
                  </div>

                  <MessageBubble message={x.text} sentByMe={x.sentByMe} />
                </div>
              ) : (
                <div className="flex flex-row">
                  {/* Messages sent by other user */}
                  <div>
                    <span className="text-slate-400 text-sm flex justify-center	">
                      {x.user.name}
                    </span>{" "}
                    <img
                      className="w-10 h-10 rounded-full ml-4 mr-4 "
                      src="https://images.pexels.com/photos/75973/pexels-photo-75973.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Rounded avatar"
                    />
                  </div>

                  <MessageBubble message={x.text} sentByMe={x.sentByMe} />
                </div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};
