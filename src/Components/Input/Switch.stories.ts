import type { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Input/Switch",
  component: Switch,
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Playground: Story = {
  args: {
    disabled: false,
  },
};
