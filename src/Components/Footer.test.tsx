import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("render", () => {
  render(<Footer />);
  let element = screen.getByTestId("footer-container");
  expect(element).toBeInTheDocument();
});
