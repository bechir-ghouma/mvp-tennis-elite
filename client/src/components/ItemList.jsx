import React from "react";

const ItemList = (props) => {
  return (
    <div className="bigBox">
      {props.items.map((item) => (
        <div className="slider-box">
          <div className="img-box">
            <img src={item.url} alt="item" />
          </div>
          <div className="detail">
            <a href="#">{item.model}</a>
          </div>
          <a href="#" className="price">
            {item.price}$
          </a>
          <div className="cart" onClick={() => props.handleClick(item.price)}>
            <a href="#">Add To Cart</a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
