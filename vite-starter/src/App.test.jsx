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

// test is a global from vitest
// when check the checkbox on the button is disabled, check off will make enabled
test('checkbox flow', () => {
  render(<App />);

  // find button
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  // find checkbox having accessible name which will be the label for the input
  const checkboxElement = screen.getByRole("checkbox", { name: /disable button/i });

  // check intial condition if checkbox is unchecked and button is enabled
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  // click checkbox to disable the button
  // checkboxElement.click();
  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toBeDisabled();

  // click checkbox to enable the button
  fireEvent.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
})
