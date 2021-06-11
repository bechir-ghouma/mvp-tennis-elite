import React from "react";
import axios from "axios";

class Rackets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rackets: {},
    };
  }
  componentDidMount() {
    axios
      .get("/rackets")
      .then((result) => {
        this.setState({ rackets: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        {this.state.rackets.map((racket) => (
          <ul>
            <li>{racket.url}</li>
            <li>{racket.model}</li>
            <li>{racket.price}</li>
          </ul>
        ))}
      </div>
    );
  }
}
export default Rackets;
