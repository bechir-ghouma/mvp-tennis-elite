import React from "react";

class Backpack extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bigBox">
        {this.props.backpacks.map((backpack) => (
          <div
            className="slider-box"
            
          >
            <div className="img-box">
              <img src={backpack.url} />
            </div>
            <div className="detail">
              <a href="#">{backpack.model}</a>
            </div>
            <a href="#" className="price">
              {backpack.price}$
            </a>
            <div className="cart" onClick={() => props.handleClick(backpack.price)}>
              <a href="#">Add To Cart</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Backpack;
