import type { Meta, StoryObj } from "@storybook/react";
import  Radio  from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Input/Radio",
  component: Radio,
  parameters: {
    controls: {
      include: [
        'disabled',
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Playground: Story = {
  args: {
    disabled: false,
    },
};


