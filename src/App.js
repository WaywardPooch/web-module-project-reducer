// Libraries
import React, { useReducer } from "react";
// Reducer
import reducer, { initialState } from "./reducers";
// Actions
import { applyNumber, changeOperation } from "./actions";
// Styles
import "./App.css";
// Components
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCalcBtnPress = (number) => {
    dispatch(applyNumber(number));
  };

  const handleChangeOperation = (operator) => {
    dispatch(changeOperation(operator));
  }

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
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleCalcBtnPress(1)} />
              <CalcButton value={2} onClick={() => handleCalcBtnPress(2)}/>
              <CalcButton value={3} onClick={() => handleCalcBtnPress(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleCalcBtnPress(4)}/>
              <CalcButton value={5} onClick={() => handleCalcBtnPress(5)}/>
              <CalcButton value={6} onClick={() => handleCalcBtnPress(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleCalcBtnPress(7)}/>
              <CalcButton value={8} onClick={() => handleCalcBtnPress(8)}/>
              <CalcButton value={9} onClick={() => handleCalcBtnPress(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleChangeOperation("+")}/>
              <CalcButton value={"*"} onClick={() => handleChangeOperation("*")}/>
              <CalcButton value={"-"} onClick={() => handleChangeOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
