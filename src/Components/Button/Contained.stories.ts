import type { Meta, StoryObj } from "@storybook/react";
import ContainedButton from "./Contained";

const meta = {
  title: "Button/Contained",
  component: ContainedButton,
  parameters: {
    controls: {
      include: ["disabled", "size", "children"],
    },
  },
} satisfies Meta<typeof ContainedButton>;

export default meta;

type Story = StoryObj<typeof meta>;
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
  },
};
