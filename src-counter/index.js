import React from "react";
import { createStore } from "redux";
import ReactDom from "react-dom";

import Counter from "./components/Counter";
import { counter } from "./reducers/counter";

let store = createStore(counter);

const render = () =>
  ReactDom.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    document.getElementById("root")
  );

render();
store.subscribe(() => {
  console.log("subscribe: ", store.getState());
  render();
});
