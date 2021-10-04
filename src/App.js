// Libraries
import React, { useReducer } from "react";
// Reducer
import reducer, { initialState } from "./reducers";
// Actions
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  clearMemory,
  setMemory,
  applyToMemory,
} from "./actions";
// Styles
import "./App.css";
// Components
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  // State management
  const [state, dispatch] = useReducer(reducer, initialState);

  // Event handlers
  const handleCalcBtnPress = (number) => {
    dispatch(applyNumber(number));
  };
  const handleChangeOperation = (operator) => {
    dispatch(changeOperation(operator));
  };
  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };
  const handleClearMemory = () => {
    dispatch(clearMemory());
  };
  const handleSetMemory = () => {
    dispatch(setMemory());
  };
  const handleApplyToMemory = () => {
    dispatch(applyToMemory());
  };

  // Markup
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => {
                  handleSetMemory();
                }}
              />
              <CalcButton
                value={"MR"}
                onClick={() => {
                  handleApplyToMemory();
                }}
              />
              <CalcButton
                value={"MC"}
                onClick={() => {
                  handleClearMemory();
                }}
              />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleCalcBtnPress(1)} />
              <CalcButton value={2} onClick={() => handleCalcBtnPress(2)} />
              <CalcButton value={3} onClick={() => handleCalcBtnPress(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleCalcBtnPress(4)} />
              <CalcButton value={5} onClick={() => handleCalcBtnPress(5)} />
              <CalcButton value={6} onClick={() => handleCalcBtnPress(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleCalcBtnPress(7)} />
              <CalcButton value={8} onClick={() => handleCalcBtnPress(8)} />
              <CalcButton value={9} onClick={() => handleCalcBtnPress(9)} />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => handleChangeOperation("+")}
              />
              <CalcButton
                value={"*"}
                onClick={() => handleChangeOperation("*")}
              />
              <CalcButton
                value={"-"}
                onClick={() => handleChangeOperation("-")}
              />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClearDisplay()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
