import { render, screen } from "@testing-library/react";
import { ContainedButton } from "./Contained";
import { OutlinedButton } from "./Outlined";

test("render contained button", () => {
  render(<ContainedButton />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("render outlined button", () => {
  render(<OutlinedButton />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
