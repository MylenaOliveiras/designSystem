import type { Meta, StoryObj } from "@storybook/react";
import { OutlinedButton } from "./Outlined";

const meta: Meta<typeof OutlinedButton> = {
  title: "Button/Outlined",
  component: OutlinedButton,
  parameters: {
    controls: {
      include: [
        'disabled',
        'size',
        'children',
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OutlinedButton>;

export const Playground: Story = {
  args: {
    children: "Botão",
    disabled: false,
    size: "medium",
  },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    }
  };
