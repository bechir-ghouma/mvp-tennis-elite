import React from "react";

class Backpack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.backpacks.map((backpack) => (
          <ul >
            <li>{backpack.url}</li>
            <li>{backpack.model}</li>
            <li>{backpack.price}$</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Backpack;
