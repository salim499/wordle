import { render, screen } from "@testing-library/react";

import Header from "./Header";

test("render", () => {
  render(<Header />);
  let element = screen.getByTestId("header-container");
  expect(element).toBeInTheDocument();
});
