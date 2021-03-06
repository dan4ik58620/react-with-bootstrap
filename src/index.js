import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store"
console.log(store)

// мы оборачиваем отрисовку всего компонента Provider чтобы все компоненты имели доступ к глобальному store
// в компонент provider нам необходимо передать сам store

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root"),
);
