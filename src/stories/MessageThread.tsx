import React, { useEffect, useState } from "react";
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
  // is it the first message by user (in a group)
  // is it the last message by user (in a group)
  // is the user me or them

  // everything else should be square
  //   if (firstByUser ) round top
  //   if (lastByUser ) round bottom
  //   if me ? send it to the right : send it to the left (round opposite edges)
  const newMessage = " rounded-tl-lg rounded-tr-lg rounded-bl-lg ";
  const middleMessage = " rounded-tl-lg rounded-tr-lg rounded-bl-lg ";
  const lastMessage = " rounded-br-lg rounded-bl-lg rounded-tl-lg ";
  const aloneMessage = " rounded ";
  return (
    <div className="rounded-lg bg-white px-4 py-4 	">
      {messages.map((message, idx, msgs) => {
        // if last message
        if (idx == msgs.length - 1) {
          message.styling = lastMessage;
        }
        // if first message
        else if (idx == 0) {
          message.showImage = true;
          message.styling = newMessage;
        } else if (msgs[idx].user.name === msgs[idx - 1].user.name) {
          // if current name matches the previous message name, dont show img, middle message
          message.showImage = false;
          message.styling = middleMessage;
        } else if (msgs[idx].user.name !== msgs[idx - 1].user.name) {
          message.showImage = true;
          message.styling = newMessage;
          if (msgs[idx].user.name !== msgs[idx + 1].user.name) {
            // if the current name does not match the next name, last message
            message.styling = lastMessage;
          }
          // if current name does not match the previous message n{ame, show img, new message
          //   if the next user is different, close message,
        } else {
          // last message?
          message.showImage = true;
          message.styling = lastMessage;
        }

        return (
          <>
            <div className="flex">
              {message.sentByMe ? (
                <div className="flex flex-row-reverse">
                  <img
                    className={`w-10 h-10 rounded-full ml-4`}
                    src="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Rounded avatar"
                    style={!message.showImage ? { visibility: "Hidden" } : {}}
                  />

                  <MessageBubble
                    message={message.text}
                    sentByMe={message.sentByMe}
                    prevMessageByMe={message.showImage}
                    index={idx}
                    styling={message.styling}
                  />
                </div>
              ) : (
                <div className="flex flex-row">
                  <img
                    className="w-10 h-10 rounded-full ml-4 mr-4"
                    src="https://images.pexels.com/photos/75973/pexels-photo-75973.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Rounded avatar"
                    style={!message.showImage ? { visibility: "Hidden" } : {}}
                  />
                  <MessageBubble
                    message={message.text}
                    sentByMe={message.sentByMe}
                    prevMessageByMe={message.showImage}
                    index={idx}
                    styling={message.styling}
                  />

                </div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};
