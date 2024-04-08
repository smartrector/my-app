import React from "react";
import {useParams} from "react-router-dom";

function Product(props) {
  const {item} = useParams();

  return (
    <>
      <div className="subVisual">product</div>
      <div className="container subPro">
        <h3>{props.vData[item].title}</h3>
        <hr />
        <div className="content">
          <img src={`../images/${props.vData[item].img}`} alt="" />
          <p>{props.vData[item].content}</p>
        </div>
      </div>
    </>
  );
}

export default Product;
