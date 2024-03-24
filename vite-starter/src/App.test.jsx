import { render, screen } from "@testing-library/react";
import App from "./App";

test("button starts with correct label and color!", () => {
  // const { container } = render(<App />);
  // logRoles(container);
  render(<App />);

  const btnElement = screen.getByRole("button", { name: /blue/i });
  // first assertion
  expect(btnElement).toHaveClass("red");

  // second assertion
});

test("button has correct label and color after click!", () => {
  // render the App
  render(<App />);

  // find the button
  screen.getByRole("button");
  // click the button

  // check button text

  // check button color
});

