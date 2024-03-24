import { render, screen } from "@testing-library/react";
import App from "./App";

test("button starts with correct color!", () => {
  // const { container } = render(<App />);
  // logRoles(container);
  render(<App />);

  const btnElement = screen.getByRole("button", { name: /blue/i });
  // first assertion
  expect(btnElement).toHaveClass("red");

  // second assertion
});

test("button starts with correct text", () => {});

test("button has correct color after click!", () => {});

test("button has correct text after click", () => {});
