import { Meta, Story } from "@storybook/react";
import { TextField, ITextFieldProps } from "./TextField";
import { Form, useForm } from "react-hook-form";

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
  const { control } = useForm();

  return (
    <Form control={control} onSubmit={() => {}}>
      <TextField {...args} control={control} />
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
