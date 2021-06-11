import React from "react";
import axios from "axios";

class Backpack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backpacks: {},
    };
  }
  componentDidMount() {
    axios
      .get("/backpack")
      .then((result) => {
        this.setState({ backpacks: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        {this.state.backpacks.map((backpack) => (
          <ul>
            <li>{backpack.url}</li>
            <li>{backpack.model}</li>
            <li>{backpack.price}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Backpack;
