import React from 'react';
import axios from 'axios';

class Clothes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: {},
    };
  }
  componentDidMount() {
    axios
      .get("/clothes")
      .then((result) => {
        this.setState({ clothes: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        {this.state.clothes.map((clothe) => (
          <ul>
            <li>{clothe.url}</li>
            <li>{clothe.model}</li>
            <li>{clothe.price}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Clothes;