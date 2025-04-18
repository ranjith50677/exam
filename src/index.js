import "react-app-polyfill/stable";
import "core-js";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import Facluty from "./context/fatculty";
import "./styles.css";
import { HashRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Facluty.Provider value={{ isfaculty: false,name:"" }}>
      <Provider store={store}>
        <App />
        <Toaster/>
      </Provider>
    </Facluty.Provider>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
