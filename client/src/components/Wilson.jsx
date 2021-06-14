import React from "react";

const Wilson = (props) => {
  return (
    <div className="bigBox">
      {props.wilson.map((wils) => (
        <div
          className="slider-box"
          
        >
          <div className="img-box">
            <img src={wils.url} alt="wilson" />
          </div>
          <div className="detail">
            <a href="#">{wils.model}</a>
          </div>
          <a href="#" className="price">
            {wils.price}$
          </a>
          <div className="cart" onClick={() => props.handleClick(wils.price)}>
            <a href="#">Add To Cart</a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Wilson;
