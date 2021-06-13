import React from "react";
import axios from "axios";

class Rackets extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.rackets.map((racket) => (
          <ul>
            <li>{racket.url}</li>
            <li>{racket.model}</li>
            <li>{racket.price}$</li>
          </ul>
        ))}
      </div>
    );
  }
}
export default Rackets;
