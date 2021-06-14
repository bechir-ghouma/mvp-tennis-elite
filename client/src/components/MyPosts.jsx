import React from "react";

const MyPosts = (props) => {
  return (
    <div className="bigBox">
      {props.items.map((mypost) => (
        <div className="slider-box">
          <div className="img-box">
            <img src={mypost.url} alt="nike" />
          </div>
          <div className="detail">
            <a href="#">{mypost.model}</a>
          </div>
          <a href="#" className="price">
            {mypost.price}$
          </a>
          <div
            className="cart"
            //   onClick={() => props.handleClick(nik.price)}
          >
            <a href="#">Delete Item</a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MyPosts;
