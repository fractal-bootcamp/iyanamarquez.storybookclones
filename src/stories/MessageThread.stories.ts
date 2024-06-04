import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MessageThread } from "./MessageThread";
import { exampleMessages } from "./messages";

const meta = {
  title: "Example/MessageThread",
  component: MessageThread,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof MessageThread>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {
  args: {
    messages: exampleMessages,
  },
};
