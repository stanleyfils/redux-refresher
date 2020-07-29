import React from "react";
// import "./App.css";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// import actions
import { increment, decrement } from "./actions";

const Div = styled.div`
  display: inline-block;
  text-align: center;
  position: absolute;
  left: 45%;
`;

function App() {
  // use line 6 to extract counter state
  const counter = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <Div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLoggedIn ? <h3>Top secret access only</h3> : ""}
    </Div>
  );
}

export default App;
