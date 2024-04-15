import React from "react";
import "./assets/css/tStyle.scss";
import {configureStore, createSlice} from "@reduxjs/toolkit";
import {Provider, useSelector} from "react-redux";

const counterStore = createSlice({
  name: "countNum",
  initialState: {num: 100},
  reducers: {
    up: (state, action) => {
      // state.num = state.num + action.payload
      state.num += action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterStore.reducer,
  },
});
function App() {
  return (
    <Provider store={store}>
      <div>
        <h3>test</h3>
        <ChildOne />
      </div>
    </Provider>
  );
}

function ChildOne() {
  const num = useSelector((state) => state.counter.num);
  return <div>ChildOne{num}</div>;
}

export default App;
