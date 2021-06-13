import React from "react";

const Head = (props) => {
  return (
    <div className="bigBox">
      {props.head.map((hea) => (
        <div
          className="slider-box"
          onClick={() => props.handleClick(hea.price)}
        >
          <div className="img-box">
            <img src={hea.url} alt="head" />
          </div>
          <div className="detail">
            <a href="#">{hea.model}</a>
          </div>
          <a href="#" className="price">
            {hea.price}$
          </a>
          <div className="cart">
            <a href="#">Add To Cart</a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Head;
