import { render, screen } from "@testing-library/react";
import { Radio } from "./Radio";
import { Select } from "./Select";
import { Switch } from "./Switch";
import { TextField } from "./TextField";
import { Form } from "../Form/Form";
import { Checkbox } from "./Checkbox";

test("renders radio", () => {
  render(
    <Form onSubmit={() => {}}>
      <Radio />
    </Form>
  );
  const radio = screen.getByRole("radio");
  expect(radio).toBeInTheDocument();
});

test("renders select", () => {
  render(
    <Form onSubmit={() => {}}>
      <Select name="Select" options={["a", "b"]} label="Select" />
    </Form>
  );
  const select = screen.getByRole("textbox", {
    hidden: true,
  });
  expect(select).toBeInTheDocument();
});

test("renders switch", () => {
  render(
    <Form onSubmit={() => {}}>
      <Checkbox name="checkbox" />
    </Form>
  );
  const checkbox = screen.getByTestId("CheckBoxOutlineBlankIcon");
  expect(checkbox).toBeInTheDocument();
});

test("renders textfield", () => {
  render(
    <Form onSubmit={() => {}}>
      <TextField name="Input" label="Input" />
    </Form>
  );
  const textfield = screen.getByText("Input");
  expect(textfield).toBeInTheDocument();
});

test("renders checkbox", () => {
  render(
    <Form onSubmit={() => {}}>
      <Switch />
    </Form>
  );
  const switchInput = screen.getByRole("checkbox");
  expect(switchInput).toBeInTheDocument();
});
