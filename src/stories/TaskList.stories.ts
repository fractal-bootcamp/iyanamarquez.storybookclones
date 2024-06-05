import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { initialTasks, TaskList } from "./TaskList";

const meta = {
  title: "Example/TaskList",
  component: TaskList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: initialTasks,
};
