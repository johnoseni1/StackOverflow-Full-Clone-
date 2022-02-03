import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import store from "./app/store";
import { Provider } from "react-redux";

hljs.configure({
  // optionally configure hljs
  languages: [
    "javascript",
    "ruby",
    "python",
    "c",
    "c++",
    "java",
    "HTML",
    "css",
    "perl",
    "R",
    "matlab",
  ],
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
