import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button click flow!", () => {
  // const { container } = render(<App />);
  // logRoles(container);
  render(<App />);

  const btnElement = screen.getByRole("button", { name: /blue/i });
  // first assertion
  expect(btnElement).toHaveClass("red");

  // click the button
  fireEvent.click(btnElement);

  // check button text
  expect(btnElement).toHaveTextContent(/red/);

  // check button color
  // expect(btnElement).toHaveClass("blue");
  // expect(btnElement).toHaveStyle({ "background-color": "blue" }); // failed
  expect(btnElement).toHaveStyle({ "background-color": "rgb(0, 0, 255)" }); // passed
});
