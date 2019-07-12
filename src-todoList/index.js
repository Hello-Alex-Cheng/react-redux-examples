import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import todoApp from "./reducers"; // 获取整个 todoApp 的 reducer

import App from "./components/App";

let store = createStore(todoApp); // 第一个参数是接收 reducer

store.subscribe(() => console.log(store.getState()));

// Provider: 配合 connect() 方法使用， 使得我们的组件都能够与 Redux store 产生关联
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
