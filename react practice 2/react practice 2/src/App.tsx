import { useState, ChangeEvent } from "react";

import "./App.css";

function App() {
  const [mainInputValue, setMainInputValue] = useState<string>("");

  const mainInputValueLength = mainInputValue.length;

  function updateMainInputVal(e: ChangeEvent<HTMLInputElement>) {
    if (!checkIfAtMaxLen()) {
      setMainInputValue(e.target.value);
    }
  }

  function checkIfAtMaxLen(): boolean {
    if (mainInputValueLength >= 20) {
      return true;
    }

    return false;
  }

  return (
    <main className="mainContainer">
      <div className="mainCenterPageContainer">
        <div className="mainInputContainer">
          <div className="inputAndLabelContainer">
            <label htmlFor="mainInput">Start typing</label>
            <input
              type="text"
              id="mainInput"
              value={mainInputValue}
              onChange={updateMainInputVal}
            />
          </div>
          <p>{mainInputValueLength} / 20</p>
        </div>
      </div>
    </main>
  );
}

export default App;
