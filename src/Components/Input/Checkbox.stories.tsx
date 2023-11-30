import { Meta, Story } from "@storybook/react";
import Checkbox, { ICheckboxProps } from "./Checkbox";
import { Form } from "../Form/Form";
import React from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Input/Checkbox",
  component: Checkbox,

  parameters: {
    controls: {
      include: ["disabled", "label", "placeholder"],
    },
  },
};
export default meta;

type StoryArgs = ICheckboxProps;

const Template: Story<StoryArgs> = (args) => {
  return (
    <Form onSubmit={() => {}}>
      <Checkbox {...args} />
    </Form>
  );
};

export const Playground: Story<StoryArgs> = Template.bind({});
Playground.args = {
  name: "checkbox",
  label:
    "Declaro que li e estou de acordo com os Termos de Uso e Política de Privacidade",
  placeholder: "Placeholder",
  disabled: false,
  required: true,
};
