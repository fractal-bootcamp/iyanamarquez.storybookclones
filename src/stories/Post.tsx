import React from "react";
import "./button.css";
import "../index.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

interface PostProps {
  userName?: string;
  description?: string;
  imageUrl?: string;
  profileImageUrl: string;
  timeStamp?: string;
  likes?: number;
  comments?: number;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Post = ({
  userName,
  description,
  imageUrl,
  profileImageUrl,
  timeStamp,
  likes,
  comments,
  ...props
}: PostProps) => {
  return (
    <div>
      {/* container for profile pic and name */}
      <div className="flex flex-row relative">
        <img
          style={{ height: 50, width: 50 }}
          src={profileImageUrl}
          className="rounded-full absolute left-0"
        ></img>
        <div className="ml-16">
          <h1>
            {userName} <span className="text-slate-400	">in Group name</span>
          </h1>
          <span className="text-slate-400	">{timeStamp} min ago</span>
        </div>
      </div>
      {/* container for image and desc */}
      <div className="ml-16">
        <img
          style={{ height: 450, width: 450 }}
          className="mt-4"
          src={imageUrl}
        ></img>
        <p className="my-4  text-black font-normal text-lg">{description}</p>
        <div className="font-semibold flex flex-row">
          <span className="tracking-wide	">
            <FavoriteBorderIcon />
            <span className="ml"> {likes} likes</span>
          </span>{" "}
          <span className="ml-4">
            {" "}
            <ChatBubbleOutlineIcon /> {comments} comments
          </span>
        </div>
      </div>
    </div>
  );
};
