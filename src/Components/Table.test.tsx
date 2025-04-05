import { render, screen } from "@testing-library/react";
import Table from "./Table";
test("render all inputs", () => {
  const ref = { current: [] };
  render(
    <Table
      ref={ref}
      rows={[0, 1, 2, 3, 4]}
      cols={[0, 1, 2, 3, 4]}
      handleChange={jest.fn()}
    />
  );
  const inputs = screen.getAllByRole("textbox");
  expect(inputs).toHaveLength(25);
});

test("input is read only", () => {
  const ref = { current: [] };
  render(
    <Table
      ref={ref}
      rows={[0, 1, 2, 3, 4]}
      cols={[0, 1, 2, 3, 4]}
      handleChange={jest.fn()}
    />
  );
  const inputs = screen.getAllByRole("textbox");
  inputs.forEach((el) => {
    expect(el).toHaveAttribute("type", "text");
    expect(el).toHaveAttribute("readOnly");
    expect(el).toHaveAttribute("maxLength", "1");
  });
});
