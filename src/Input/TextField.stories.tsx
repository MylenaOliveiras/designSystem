import { Meta, Story } from "@storybook/react";
import TextField, { ITextFieldProps } from "./TextField";
import React from "react";
import { Form } from "../Form/Form";

const meta: Meta<typeof TextField> = {
  title: "Input/TextField",
  component: TextField,

  parameters: {
    controls: {
      include: ["disabled", "label", "placeholder"],
    },
  },
};
export default meta;

type StoryArgs = ITextFieldProps;

const Template: Story<StoryArgs> = (args) => {
  return (
    <Form onSubmit={() => {}}>
      <TextField {...args} />
    </Form>
  );
};

export const Playground: Story<StoryArgs> = Template.bind({});
Playground.args = {
  label: "Label",
  placeholder: "Placeholder",
  disabled: false,
  required: true,
  name: "teste",
};
