import React, { useEffect, useState } from "react";
import "./button.css";
import "../index.css";
import { MessageBubble } from "./MessageBubble";
import { Message, exampleMessages } from "./messages";
import { blob } from "stream/consumers";

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
        // if last message,
        if (idx == msgs.length - 1) {
          // if last message alone, alone message, if last message of group, last message

          if (msgs[idx].user.name === msgs[idx - 1].user.name) {
            message.styling = lastMessage;
          } else {
            message.styling = aloneMessage;
            message.showImage = true;
          }
        }
        // if first message
        else if (idx == 0) {
          message.showImage = true;
          message.styling = newMessage;
        }
        // MIDDLE, NOT ALONE MESSAGE
        else if (
          msgs[idx].user.name === msgs[idx - 1].user.name &&
          msgs[idx].user.name === msgs[idx + 1].user.name
        ) {
          message.styling = middleMessage;
        }
        // MIDDLE, ALONE MESSAGE
        // if prev and next message do not match
        else if (
          msgs[idx].user.name !== msgs[idx - 1].user.name &&
          msgs[idx].user.name !== msgs[idx + 1].user.name
        ) {
          message.styling = aloneMessage;
          message.showImage = true;
        }
        // LAST MESSAGE IN GROUP,
        // if prev message matches curr message, and next message does not match curr message, last message
        else if (
          msgs[idx].user.name === msgs[idx - 1].user.name &&
          msgs[idx].user.name !== msgs[idx + 1].user.name
        ) {
          message.styling = lastMessage;
        }
        // FIRST MESSAGE IN GROUP, NOT FIRST MESSAGE
        // if prev message does not equal curr message, and next message equals curr message, first message
        else if (
          msgs[idx].user.name !== msgs[idx - 1].user.name &&
          msgs[idx].user.name === msgs[idx + 1].user.name
        ) {
          message.styling = newMessage;
          message.showImage = true;
        } else {
          message.showImage = true;
          message.styling = "rounded";
        }

        return (
          <>
            <div className="flex">
              {message.sentByMe ? (
                <div className="flex flex-row-reverse">
                  <div className="flex flex-col justify-center justify-items-center	content-center	">
                    <span
                      style={!message.showImage ? { visibility: "Hidden" } : {}}
                      className="text-slate-400 text-xs ml-4"
                    >
                      {message.user.name}
                    </span>
                    <img
                      className={`w-10 h-10 rounded-full ml-4`}
                      src="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Rounded avatar"
                      style={!message.showImage ? { visibility: "Hidden" } : {}}
                    />
                  </div>

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
                  <div className="flex flex-col justify-center justify-items-center	content-center	">
                    <span
                      style={!message.showImage ? { visibility: "Hidden" } : {}}
                      className="text-slate-400 text-xs ml-4"
                    >
                      {message.user.name}
                    </span>
                    <img
                      className="w-10 h-10 rounded-full ml-4 mr-4"
                      src="https://images.pexels.com/photos/75973/pexels-photo-75973.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Rounded avatar"
                      style={!message.showImage ? { visibility: "Hidden" } : {}}
                    />
                  </div>

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
