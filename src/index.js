
// import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { createRoot } from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'))
// ReactDOM.render(
{/* <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  //</React.StrictMode>, */}
//   //{/*document.getElementById("root")*/}
// );

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>,
);
