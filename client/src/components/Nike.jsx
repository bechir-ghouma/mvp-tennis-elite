import React from "react";

const Nike = (props) => {
  return (
    <div className="bigBox">
      {props.nike.map((nik) => (
        <div
          className="slider-box"
          onClick={() => props.handleClick(nik.price)}
        >
          <div className="img-box">
            <img src={nik.url} alt="nike" />
          </div>
          <div className="detail">
            <a href="#">{nik.model}</a>
          </div>
          <a href="#" className="price">
            {nik.price}$
          </a>
          <div className="cart">
            <a href="#">Add To Cart</a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Nike;
