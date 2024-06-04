import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { HeatGrid } from "./HeatGrid";

const meta = {
  title: "Example/HeatGrid",
  component: HeatGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof HeatGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Name of thing",
    link: "google.com",
    backgroundColor: "#AFD2A5",
    description: "hello this is a description",
  },
};
