import React from "react";
import axios from "axios";

class Rackets extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bigBox">
        {this.props.rackets.map((racket) => (
          <div
            className="slider-box"
            
          >
            <div className="img-box">
              <img src={racket.url}></img>
            </div>
            <div className="detail">
              <a href="#">{racket.model}</a>
            </div>
            <a href="#" className="price">
              {racket.price}$
            </a>
            <div className="cart" onClick={() => props.handleClick(racket.price)}>
              <a href="#">Add To Cart</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Rackets;
