import React from "react";

class Shoes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bigBox">
        {this.props.shoes.map((shoe) => (
          <div
            className="slider-box"
            
          >
            <div className="img-box">
              <img src={shoe.url} alt="1"></img>
            </div>
            <div className="detail">
              <a href="#">{shoe.model}</a>
            </div>
            <a href="#" className="price">
              {shoe.price}$
            </a>
            <div className="cart" onClick={() => props.handleClick(shoe.price)}>
              <a href="#">Add To Cart</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Shoes;
