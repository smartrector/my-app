import React, {useState} from "react";
import "./assets/css/style.css";

function App() {
  let [mView, setMView] = useState(false);
  let viewList = [
    {
      title: "안녕하세요!!!",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae?",
    },
    {
      title: "만나서반갑습니다.",
      content:
        " Possimus ratione odio eos nemo sunt enim animi officia consectetur?",
    },
    {
      title: "홈페이지를 오픈",
      content: "Odio fugit dolor, perferendis minus rem optio a nihil eos!",
    },
    {
      title: "만나서반갑습니다.",
      content:
        " Est repellendus quod itaque magnam deleniti, cupiditate saepe aspernatur eaque?",
    },
    {
      title: "만나서반갑습니다.",
      content:
        " Quisquam rem unde id nobis explicabo error beatae reiciendis incidunt.",
    },
  ];
  function modalView(idx) {
    setMView(true);
  }
  function modalClose() {
    setMView(false);
  }
  return (
    <>
      <div>
        <ul>
          {viewList.map((item, idx) => {
            return (
              <li onClick={modalView}>
                {idx + 1}. {viewList[idx].title}
              </li>
            );
          })}
        </ul>
      </div>
      {mView == true ? (
        <Modal onclick={modalClose} viewListData={viewList} />
      ) : null}
    </>
  );
}

function Modal(props) {
  console.log(props);
  return (
    <>
      <div className="modalWrap">
        <div className="modal">
          <button onClick={props.onclick} className="close">
            닫기
          </button>

          <div className="modalBody">
            <h3>{props.viewListData[2].title}</h3>
            <p>{props.viewListData[2].content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
