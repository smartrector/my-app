import {useEffect, useState} from "react";
import axios from "axios";

function BbsCommunity() {
  const itemsPerPage = 10;
  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`
      )
      .then(function (response) {
        console.log(response.data);
        setPostData(response.data);

        // Extract the total number of pages from the response headers
        const totalPages = Math.ceil(
          response.headers["x-total-count"] / itemsPerPage
        );
        setTotalPages(totalPages);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentPage]);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5; // 최대 표시할 페이지 번호 개수

    // 시작 페이지와 끝 페이지를 계산
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

    // 시작 페이지를 조정하여 보여지는 페이지 번호가 5개가 되도록 함
    if (endPage - startPage + 1 < maxPageNumbers) {
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          key={i}
          onClick={() => setCurrentPage(i)}
          className={i === currentPage ? "active" : ""}
          style={
            i === currentPage
              ? {background: "blue", padding: "5px", color: "white"}
              : {}
          }
        >
          {i}
        </span>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <div className="container h200 bg comm  flex-center">
        소통의 공간입니다.
      </div>
      <div className="container">
        <ul className="listView">
          {postData.map(function (item, i) {
            return (
              <li key={i}>
                <div className="num">
                  {(currentPage - 1) * itemsPerPage + i + 1}
                </div>
                <div className="title">{item.title}</div>
              </li>
            );
          })}
        </ul>
        <div className="pagination">
          <button
            className="page-item"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {renderPageNumbers()}
          <button
            className="page-item"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default BbsCommunity;
