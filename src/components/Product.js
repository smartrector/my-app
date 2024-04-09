import React from "react";
import {useParams} from "react-router-dom";

function Product(props) {
  const {item, userId} = useParams();

  let myData = props.vData.find(function (x) {
    return x.id == item;
  });

  console.log(myData);

  return (
    <>
      <div className="subVisual">product</div>
      <div className="container subPro">
        <h3>{myData.title}</h3>
        <hr />
        <div className="content">
          <img src={`../images/${myData.img}`} alt="" />
          <p>{myData.content}</p>
        </div>
      </div>
    </>
  );
}

export default Product;
