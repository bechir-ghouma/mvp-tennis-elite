import React from "react";
import axios from "axios";

class Clothes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bigBox">
        {this.props.clothes.map((clothe) => (
          <div
            className="slider-box"
            
          >
            <div className="img-box">
              <img src={clothe.url} alt="1" />
            </div>
            <div className="detail">
              <a href="#">{clothe.model}</a>
            </div>
            <a href="#" className="price">
              {clothe.price}$
            </a>
            <div className="cart" onClick={() => props.handleClick(clothe.price)}>
              <a href="#">Add To Cart</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Clothes;
