import React from "react";
import axios from "axios";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      model: "",
      price: "",
    };
    this.postme = this.postme.bind(this);
  }
  postme(event) {
    axios
      .post("/post", {
        url: this.state.url,
        model: this.state.model,
        price: this.state.price,
      })
      .then((result) => {
        console.log(result, "added");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <p>Drop your item photo here</p>
        <input placeholder='put your picture url inside me'></input>
        <p>Drop your item model here</p>
        <input placeholder='put your model name inside me'></input>
        <p>Drop your item price here</p>
        <input placeholder='put your item price inside me'></input>
        <button onClick={this.postme}></button>
        
      </div>
    );
  }
}
export default Post;
