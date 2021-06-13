import React from "react";
import axios from "axios";

class Shoes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.shoes.map((shoe) => (
          <ul>
            <li>{shoe.url}</li>
            <li>{shoe.model}</li>
            <li>{shoe.price}$</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Shoes;
