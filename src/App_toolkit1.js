import React from "react";
import "./assets/css/tStyle.scss";
import {Provider} from "react-redux";
import ChildOne from "./components/ChildOne.js";
import store from "./store/store.js";

function App() {
  return (
    <div>
      <Provider store={store}>
        <h3>title:toolkit</h3>
        <ChildOne />
      </Provider>
    </div>
  );
}

export default App;
