import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MessageBubble } from "./MessageBubble";

const meta = {
  title: "Example/MessageBubble",
  component: MessageBubble,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof MessageBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {
  args: {
    message:
      "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
    sentByMe: true,
  },
};
