import React from "react";
import logo from "../logo/LogoMakr-2pyzuo.png";
import axios from "axios";

class Bags extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bigBox">
        {this.props.bags.map((bag) => (
          <div className="slider-box">
            <div className="img-box">
              <img src={bag.url} />
            </div>
            <div className="detail">
              <a href="#">{bag.model}</a>
            </div>
            <a href="#" className="price">
              {bag.price}$
            </a>
            <div className="cart" onClick={() => this.props.handleClick(bag.price)}>
              <a href="#">Add To Cart</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Bags;
