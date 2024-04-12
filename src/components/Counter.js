import React from "react";
import {useSelector, useDispatch} from "react-redux";

function Counter({vdata}) {
  //   const num = useSelector((state) => {
  //     return state.num;
  //   });
  //   const title = useSelector((state) => state.title);
  const {num, title, content} = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch({type: "up", payload: 1});
  }

  return (
    <div>
      Counter{num} / {title} /{content}
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default Counter;
