import React from "react";
import axios from "axios";

class Clothes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.clothes.map((clothe) => (
          <ul>
            <img src={clothe.url} alt="1"/>
            <li>{clothe.model}</li>
            <li>{clothe.price}$</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Clothes;
