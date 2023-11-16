import { Meta, Story } from "@storybook/react";
import { Form, useForm } from "react-hook-form";
import Select from "./Components/Input/Select";
import Checkbox from "./Components/Input/Checkbox";
import Radio from "./Components/Input/Radio";
import Switch from "./Components/Input/Switch";
import { TextField } from "./Components/Input/TextField";
import { Stack } from "@mui/material";
import React from "react";

const meta: Meta<typeof Select> = {
  title: "Form/Form",
};
export default meta;

const Template: Story = () => {
  const { control } = useForm();

  return (
    <Form control={control} onSubmit={() => {}}>
      <Stack alignItems="center">
        <Select
          label="Select"
          name="select"
          options={["a", "e", "i", "o", "u"]}
          control={control}
        />
        <TextField name="text" label="Text" control={control} />
        <Checkbox name="checkbox" />
        <Radio name="radio" />
        <Switch />
      </Stack>
    </Form>
  );
};

export const Playground: Story = Template.bind({});
