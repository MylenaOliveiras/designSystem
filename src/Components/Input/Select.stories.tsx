import { Meta, Story } from "@storybook/react";
import { Form, useForm } from "react-hook-form";
import Select, { ISelectProps } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Input/Select",
  component: Select,
  parameters: {
    controls: {
      include: ["disabled", "label", "placeholder"],
    },
  },
};
export default meta;

type StoryArgs = ISelectProps;

const Template: Story<StoryArgs> = (args) => {
  const { control } = useForm();

  return (
    <Form control={control} onSubmit={() => {}}>
      <Select {...args} control={control} />
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
  options: ["item1", "item2", "item3"],
};
