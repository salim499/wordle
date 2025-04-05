import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  const modal = document.createElement("div");
  modal.setAttribute("id", "modal");
  document.body.appendChild(modal);
});

afterEach(() => {
  const modal = document.getElementById("modal");
  if (modal) document.body.removeChild(modal);
});
describe("render component", () => {
  test("render header", () => {
    render(<App />);
    const header = screen.getByTestId("header-container");
    expect(header).toBeInTheDocument();
  });
  test("render table", () => {
    render(<App />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(25);
  });
  test("render keyboard", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(26);
  });
  test("render footer", () => {
    render(<App />);
    const footer = screen.getByTestId("footer-container");
    expect(footer).toBeInTheDocument();
  });
});

test("find word with success message", async () => {
  render(<App word="AAAAA" />);

  const inputs = screen.getAllByRole("textbox");
  for (let i = 0; i < 5; i++) {
    fireEvent.change(inputs[i], { target: { value: "AAAAA" } });
  }

  const congratsText = await screen.getByText("Congratulations");
  expect(congratsText).toBeInTheDocument();
});

test("non finding word with error message", async () => {
  render(<App word="BAAAA" />);

  const inputs = screen.getAllByRole("textbox");
  for (let i = 0; i < inputs.length; i++) {
    fireEvent.change(inputs[i], { target: { value: "A" } });
  }

  const congratsText = await screen.getByText("Sorry, Try Again !");
  expect(congratsText).toBeInTheDocument();
});
