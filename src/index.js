import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";

import App from "./components/App";

let store = createStore(todoApp); // 第一个参数是接收 reducer

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

// Provider: 使组件层级中的 connect() 方法都能够获得 Redux store
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
