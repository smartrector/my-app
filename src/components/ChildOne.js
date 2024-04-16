import React from "react";
import {useSelector, useDispatch} from "react-redux";
import counterStore from "../store/counterSlice";

function ChildOne() {
  const num = useSelector((state) => {
    return state.counter.num;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>test / {num}</h1>
      <button
        onClick={() => {
          dispatch(counterStore.actions.up(1));
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default ChildOne;
