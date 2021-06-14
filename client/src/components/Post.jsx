import React from "react";
import axios from "axios";
import logo from "../logo/LogoMakr-2pyzuo.png";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      model: "",
      price: "",
    };
    this.postme = this.postme.bind(this);
    this.post = this.post.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.placeholder]: e.target.value,
    });
  }
  postme() {
    swal.fire({
      icon: "Success",
      title: "Success",
      text: "Posted !!",
    });
  }
  post() {
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
      <div className="bigPost">
        <p className="parag">Drop your item photo here</p>
        <input
          onChange={this.handleChange}
          className="inp"
          placeholder="put your picture url inside me"
        ></input>
        <p className="parag">Drop your item model here</p>
        <input
          onChange={this.handleChange}
          className="inp"
          placeholder="put your model name inside me"
        ></input>
        <p className="parag">Drop your item price here</p>
        <input
          onChange={this.handleChange}
          className="inp"
          placeholder="put your item price inside me"
        ></input>
        <br></br>
        <br></br>
        <button onClick={this.postme} className="pbtn">
          Post Now
        </button>
      </div>
    );
  }
}
export default Post;
