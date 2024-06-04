import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Task } from "./TaskItem";

const meta = {
  title: "Example/Task",
  component: Task,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {
  args: {
    title: "Dishwashing",
    selected: false,
    backgroundColor: "#E2FFE5",
    description: "Wash and dry dishes, pots, pans, and utensils",
  },
};

export const NonSelected: Story = {
  args: {
    title: "Laundry",
    selected: false,
    backgroundColor: "#E2FFE5",
    description: "Wash, dry, fold, and put away clothes and linens.",
  },
};
