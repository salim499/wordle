import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Keyboard from "./Keyboard";
test("rendering 26 buttons", () => {
  render(<Keyboard rowState={0} colState={0} handleChange={jest.fn()} />);
  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(26);
});

test("rendering all letters of alphabet", () => {
  render(<Keyboard rowState={0} colState={0} handleChange={jest.fn()} />);
  const buttons = screen.getAllByRole("button");
  const alphabets = buttons.map((button) => button.textContent);
  expect(alphabets).toEqual([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]);
});

test("function called with good attributes", async () => {
  const functionToVerify = jest.fn();
  render(
    <Keyboard rowState={0} colState={0} handleChange={functionToVerify} />
  );
  const user = userEvent.setup();
  const buttonA = screen
    .getAllByRole("button")
    .find((el) => el.textContent === "A") as HTMLElement;
  await user.click(buttonA);
  expect(functionToVerify).toHaveBeenCalledTimes(1);
  expect(functionToVerify).toBeCalledWith(0, 0, "A");
});
