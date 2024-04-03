import React, {useState} from "react";
import "./assets/css/style.css";

function App() {
  const num = 10;
  return (
    <>
      <div className="wrap">
        부모컨테이너 {num}
        <Child1 넘버={num} />
      </div>
    </>
  );
}

function Child1(props) {
  console.log(props);
  return (
    <>
      <div className="wrap">자식컨테이너1 {props.넘버} </div>
    </>
  );
}

function Child2() {
  return (
    <>
      <div className="wrap">자식콘테이너2</div>
    </>
  );
}

export default App;
