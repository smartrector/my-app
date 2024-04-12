import React from "react";
import "./assets/css/tStyle.scss";
//npm i redux react-redux
import {createStore} from "redux";
import {Provider, useSelector, useDispatch} from "react-redux";

// persist 설정 lib
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  num: 0,
  title: "안녕하세요",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod asperiores, quas maxime aliquid excepturi accusamus quos dolorem temporibus dolor beatae.",
};

function reducer(state = initialState, action) {
  // console.log("init data : " + state.num);
  console.log(action);
  if (action.type === "numUp") {
    return {
      ...state,
      num: state.num + action.payload,
    };
  }

  if (action.type === "titleModi") {
    return {
      ...state,
      title: action.text,
    };
  }

  return state;
}

// persist구성;
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
// const store = createStore(reducer, initialState);

const persitor = persistStore(store);

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
  const num = useSelector((state) => {
    return state.num;
  });
  const title = useSelector((state) => {
    return state.title;
  });

  // const {num, content} = useSelector((state) => {
  //   return state;
  // });
  // const {num, content, title} = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(" child trans : " + num);
  return (
    <>
      <div className="border p-4">
        <h3>childTwo</h3>
        number ( {num} )<br />
        title : {title}
        <br />
        <button
          className=" bg-blue-300 px-4 py-1 rounded-md hover:bg-blue-500 hover:text-white"
          onClick={() => {
            dispatch({type: "numUp", payload: 1});
          }}
        >
          아주쉬운클릭
        </button>
        <button
          onClick={() => {
            dispatch({type: "titleModi", text: "title변경됨"});
          }}
        >
          글자변경
        </button>
      </div>
    </>
  );
}

export default App;
