import React from "react";
import "./button.css";
import "../index.css";

interface CardProps {
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
export const Card = ({
  title,
  backgroundColor,
  link,
  description,
  ...props
}: CardProps) => {
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <h1>title: {title}</h1>
      <p>description: {description}</p>
      <a href={link}>link</a>
    </div>
  );
};
