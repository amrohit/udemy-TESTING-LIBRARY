import { useState } from "react";
import "./App.css";

function App() {
  const [currentColor, setCurrentColor] = useState("red");
  const nextColor = currentColor === "red" ? "blue" : "red";

  function onClickHandler() {
    // setCurrentColor((prev) => (prev === "red" ? "blue" : "red"));
    setCurrentColor(nextColor);
  }

  return (
    <div>
      <button className={currentColor} onClick={onClickHandler} type="button">
        Change to {nextColor}
      </button>
    </div>
  );
}

export default App;

/**
 * "Test Files 1 Passed" means that one test file has been executed and all the tests within that file have passed.
 * "Tests 4 Passed" means that four individual tests have passed. These tests could be spread across multiple test files or could all be in the same file.
 * For example, you might have a single test file with four tests in it. If all four tests pass, you would see both "Test Files 1 Passed" (because one file has been successfully tested) and "Tests 4 Passed" (because four individual tests have passed).
 */
