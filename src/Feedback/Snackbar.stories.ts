import type { Meta, StoryObj } from "@storybook/react";
import { Snackbar } from "./Snackbar";

const meta: Meta<typeof Snackbar> = {
  title: "Feedback/Snackbar",
  component: Snackbar,
  parameters: {
    controls: {
      include: ["type", "message"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Snackbar>;

export const Playground: Story = {
  args: {
    type: "success",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  argTypes: {
    type: {
      options: ["success", "error", "warning", "info"],
      control: { type: "radio" },
    },
  },
};
