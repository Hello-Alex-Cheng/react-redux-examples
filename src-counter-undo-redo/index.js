import React from "react";
import { createStore } from "redux";
import ReactDom from "react-dom";

import UndoRedo from "./components/UndoRedo";
import Counter from "./components/Counter";
import { counter } from "./reducers/counter";

let store = createStore(counter);

const App = () => {
  return (
    <div>
      <Counter
        value={store.getState().present}
        onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
      <UndoRedo
        onUndo={() => store.dispatch({ type: "ONUNDO" })}
        onRedo={() => store.dispatch({ type: "ONREDO" })}
      />
    </div>
  );
};

const render = () => ReactDom.render(<App />, document.getElementById("root"));

render();
store.subscribe(() => {
  console.log("subscribe: ", store.getState());
  render();
});
