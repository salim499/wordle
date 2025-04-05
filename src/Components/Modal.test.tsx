import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

beforeEach(() => {
  const modal = document.createElement("div");
  modal.setAttribute("id", "modal");
  document.body.appendChild(modal);
});

afterEach(() => {
  const modal = document.getElementById("modal");
  if (modal) document.body.removeChild(modal);
});

test("render Congratulations", () => {
  render(<Modal win={true} lost={false} handleClose={jest.fn()} />);
  const text = screen.getByText("Congratulations");
  expect(text).toBeInTheDocument();
});

test("render Sorry", () => {
  render(<Modal win={false} lost={true} handleClose={jest.fn()} />);
  const text = screen.getByText("Sorry, Try Again !");
  expect(text).toBeInTheDocument();
});

test("closing modal", async () => {
  const functionToCheck = jest.fn();
  render(<Modal win={true} lost={false} handleClose={functionToCheck} />);
  const button = screen.getByRole("button");
  const user = userEvent.setup();
  await user.click(button);
  expect(functionToCheck).toBeCalledTimes(1);
});
