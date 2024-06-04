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
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof HeatGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    colors: ["#3E5FCC", "#D9E2FA", "#D9D9D9", "#9EB0E5", "#BFCBEE"],
    numberOfRows: 5,
  },
};
