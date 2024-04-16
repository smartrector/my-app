import React from "react";
import "./assets/css/tStyle.scss";
import {configureStore, createSlice} from "@reduxjs/toolkit";
import {Provider, useDispatch, useSelector} from "react-redux";

const counterStore = createSlice({
  name: "countNum",
  initialState: {num: 100, title: "안녕하세요"},
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
  const dispatch = useDispatch();
  const num = useSelector((state) => state.counter.num);

  return (
    <div>
      <h3>ChildOne /{num}</h3>
      <button
        onClick={() => {
          dispatch(counterStore.actions.up(1));
        }}
      >
        클릭one
      </button>
    </div>
  );
}

export default App;
