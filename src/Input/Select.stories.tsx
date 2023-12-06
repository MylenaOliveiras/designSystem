import { Meta, Story } from "@storybook/react";
import { Select, ISelectProps } from "./Select";
import { Form } from "../Form/Form";

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
  return (
    <Form onSubmit={() => {}}>
      <Select {...args} />
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
