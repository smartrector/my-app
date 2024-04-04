import React, {useState} from "react";
import "./assets/css/style.scss";

function App() {
  let [viewData, setViewData] = useState([]);
  let [textData, setTextData] = useState("");

  function clickListener() {
    let copy = [...viewData];
    copy.push(textData);
    setViewData(copy);
    setTextData(""); // input value 제거
  }
  function textDataChange(e) {
    console.log(e.target.value);
    setTextData(e.target.value);
  }
  return (
    <>
      {viewData}
      <div>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          onChange={textDataChange}
          value={textData}
        />
        {/* 
        <input type="text" id="name" onChange={함수} />
        <input type="text" id="name" onChange={()=>{함수(인자)}} />
        <input type="text" id="name" onChange={()=>{setTextData("ddd")}} /> 
        */}
      </div>
      <div>
        <button onClick={clickListener}>입력</button>
      </div>
    </>
  );
}

export default App;
