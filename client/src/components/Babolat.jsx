import React from "react";
import logo from "../logo/LogoMakr-2pyzuo.png";


const Babolat = (props) => {
  return (
    <div className="bigBox">
      {props.babolat.map((babo) => (
        <div
          className="slider-box"
          
        >
          <div className="img-box">
            <img src={babo.url} alt="babolat" />
          </div>
          <div className="detail">
            <a href="#">{babo.model}</a>
          </div>
          <a href="#" className="price">
            {babo.price}$
          </a>
          <div className="cart" onClick={() => props.handleClick(babo.price)}>
            <a href="#">Add To Cart</a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Babolat;
