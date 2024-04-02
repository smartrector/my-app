import React, {useState} from "react";
import "./assets/css/style.css";

function App() {
  const [num, setNum] = useState(0);
  const [data, setData] = useState([
    "1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nesciunt!",
    "2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nesciunt!",
    "3.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nesciunt!",
  ]);
  return (
    <div>
      <h2>tab menu를 제작하세요</h2>
      {/* {data[0]} */}

      <ul className="menu">
        {/* {data.map((item, idx) => {
          return (
            <>
              <li
                className={`${idx == num ? "active" : ""}`}
                onClick={() => {
                  setNum(idx);
                }}
              >
                tab{idx + 1}
              </li>
            </>
          );
        })} */}

        {data.map((item, idx) => {
          return (
            <>
              <li
                className={`test ${idx == num ? "active" : ""}`}
                onClick={() => {
                  setNum(idx);
                }}
              >
                tab{idx}
              </li>
            </>
          );
        })}
      </ul>
      <div>{data[num]}</div>
    </div>
  );
}

export default App;
