import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Post } from "./Post";

const meta = {
  title: "Example/Post",
  component: Post,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    userName: "Helena",
    description: "Post description",
    imageUrl:
      "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=800",
    profileImageUrl:
      "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=800",
    timeStamp: "4",
    likes: 24,
    comments: 5,
  },
};
