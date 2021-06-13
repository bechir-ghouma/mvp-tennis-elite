import React from "react";

const Diadora = (props) => {
  return (
    <div className="bigBox">
      {props.diadora.map((dia) => (
        <div
          className="slider-box"
          onClick={() => props.handleClick(dia.price)}
        >
          <div className="img-box">
            <img src={dia.url} alt="diadora" />
          </div>
          <div className="detail">
            <a href="#">{dia.model}</a>
          </div>
          <a href="#" className="price">
            {dia.price}$
          </a>
          <div className="cart">
            <a href="#">Add To Cart</a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Diadora;
