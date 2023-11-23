import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Input/Checkbox",
  component: Checkbox,
  parameters: {
    controls: {
      include: ["disabled"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
  args: {
    disabled: false,
  },
};
