import {useEffect, useState} from "react";
import axios from "axios";
import "./assets/css/style.scss";

function App() {
  const [viewData, setViewData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [listCnt, setListCnt] = useState(10);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${listCnt}`
      )
      .then((res) => {
        console.log(res);
        setViewData(res.data);

        console.log(res.headers["x-total-count"]);
        let totalRecord = res.headers["x-total-count"];
        let totalPage = Math.ceil(totalRecord / listCnt);
        setTotalPage(totalPage);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentPage]);

  const pageNumber = () => {
    // const page = 5
    // let startPage = Math.floor((page-1)/pageCnt * pageCnt +1) ;
    // let endPage = startPage + pageCnt - 1;
    // let number = "";
    // for (let i = startPage; i <= endPage; i++) {
    //   number += "";
    // }
    // return number;
  };

  return (
    <>
      <div>
        {totalPage}
        {viewData.map((item) => {
          return (
            <>
              <div>{item.title}</div>
            </>
          );
        })}
      </div>

      <div className="pagination">
        <div>이전</div>
        <ul className="page">{pageNumber}</ul>
        <div>다음</div>
      </div>
    </>
  );
}

export default App;
