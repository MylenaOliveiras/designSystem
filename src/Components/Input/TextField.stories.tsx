import { Meta, Story } from "@storybook/react";
import { Base, IBaseProps } from "./TextField";
import { Form, useForm } from "react-hook-form";

const meta: Meta<typeof Base> = {
  title: "Input/TextField",
  component: Base,

  parameters: {
    controls: {
      include: ["disabled", "label", "placeholder"],
    },
  },
};
export default meta;

type StoryArgs = IBaseProps;

const Template: Story<StoryArgs> = (args) => {
  const { control } = useForm();

  return (
    <Form control={control} onSubmit={() => {}}>
      <Base {...args} control={control} />
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
