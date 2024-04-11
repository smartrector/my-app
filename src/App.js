import React from "react";
import "./assets/css/tStyle.scss";
//npm i redux react-redux
import {createStore} from "redux";
import {Provider, useSelector} from "react-redux";

function reducer(state, action) {
  console.log("init data : " + state.num);
  return state;
}

const initialState = {
  num: 100,
  title: "안녕하세요",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod asperiores, quas maxime aliquid excepturi accusamus quos dolorem temporibus dolor beatae.",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <div>
      <Provider store={store}>
        <div className="border p-4">
          <h3>title1</h3>
          <ChildOne />
        </div>
      </Provider>
    </div>
  );
}

function ChildOne() {
  const title = useSelector((state) => {
    return state.title;
  });
  return (
    <>
      <div className="border p-4">
        <h3>childone {title} </h3>
        <ChildTwo />
      </div>
    </>
  );
}

function ChildTwo() {
  // const num = useSelector((state) => {
  //   return state.num;
  // });
  // const content = useSelector((state) => {
  //   return state.content;
  // });

  // const {num, content} = useSelector((state) => {
  //   return state;
  // });
  const {num, content, title} = useSelector((state) => state);

  console.log(" child trans : " + num);
  return (
    <>
      <div className="border p-4">
        <h3>childTwo</h3>
        number ( {num} )<br />
        title : {title}
        <br />
        content : {content}
      </div>
    </>
  );
}

export default App;
