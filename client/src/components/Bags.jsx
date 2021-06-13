import React from 'react';
import axios from "axios";

class Bags extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.bags.map((bag) => (
          <ul >
            <li>{bag.url}</li>
            <li>{bag.model}</li>
            <li>{bag.price}$</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Bags;