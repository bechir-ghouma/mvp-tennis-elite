import React from "react";
import logo from "../logo/LogoMakr-2pyzuo.png";
import axios from "axios";

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bigBox">
        {this.props.categories.map((category) => (
          <div className="slider-box">
            <div className="img-box">
              <img src={category.url} />
            </div>
            <div className="detail">
              <a href="#">{category.model}</a>
            </div>
            <a href="#" className="price">
              {category.price}$
            </a>
            <div className="cart" onClick={() => this.props.handleClick(category.price)}>
              <a href="#">Add To Cart</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
