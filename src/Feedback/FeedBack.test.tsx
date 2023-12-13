import { render, screen } from "@testing-library/react";
import { Dialog } from "./Dialog";
import { Snackbar } from "./Snackbar";

test("renders dialog", () => {
  render(<Dialog open titleItem="This is a dialog" />);
  const dialog = screen.getByRole("heading", {
    name: /this is a dialog/i,
  });
  expect(dialog).toBeInTheDocument();
});

test("renders snackbar", () => {
  render(<Snackbar open message="This is a snackbar" type="info" />);
  const snackbar = screen.getByText(/this is a snackbar/i);
  expect(snackbar).toBeInTheDocument();
});
