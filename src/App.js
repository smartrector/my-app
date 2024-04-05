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

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 10; i++) {
      pageNumbers.push(
        <li key={i} onClick={() => setCurrentPage(i)}>
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <>
      <div>
        {totalPage}
        {viewData.map((item, i) => {
          return <div key={i}>{item.title}</div>;
        })}
      </div>

      <div className="pagination">
        <div>이전</div>
        <ul className="page">{renderPageNumbers()}</ul>
        <div>다음</div>
      </div>
    </>
  );
}

export default App;
