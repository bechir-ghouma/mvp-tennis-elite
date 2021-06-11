import React from 'react';
import axios from 'axios';

class Shoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: {},
    };
  }
  componentDidMount() {
    axios
      .get('/shoes')
      .then((result) => {
        this.setState({ shoes: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        {this.state.shoes.map((shoe) => (
          <ul>
            <li>{shoe.url}</li>
            <li>{shoe.model}</li>
            <li>{shoe.price}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Shoes;