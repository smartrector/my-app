import React from "react";
import "./assets/css/tStyle.scss";
import Counter from "./components/Counter";

function App() {
  const vdata = {
    num: 0,
  };
  return (
    <div>
      <Counter vdata={vdata} />
    </div>
  );
}

export default App;
