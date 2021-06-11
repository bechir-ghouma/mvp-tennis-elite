import React from 'react';
import axios from "axios";

class Bags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bags: {},
    };
  }
  componentDidMount() {
    axios
      .get("/bags")
      .then((result) => {
        this.setState({ bags: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        {this.state.bags.map((bag) => (
          <ul>
            <li>{bag.url}</li>
            <li>{bag.model}</li>
            <li>{bag.price}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Bags;