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
      price: 0,
    };
    this.postme = this.postme.bind(this);
    this.post = this.post.bind(this);
    this.handleprice = this.handleprice.bind(this);
    this.handlemodel = this.handlemodel.bind(this);
    this.handleurl = this.handleurl.bind(this);
  }
  handleprice(e) {
    this.setState({ price: e.target.value });

    console.log(this.state.model);
  }
  handlemodel(e) {
    this.setState({ model: e.target.value });
  }
  handleurl(e) {
    this.setState({ url: e.target.value });
  }
  postme() {
    swal.fire({
      icon: "success",
      title: "Success",
      text: "Posted !!",
    });
    this.post();
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
          onChange={this.handleurl}
          className="inp"
          placeholder="put your picture url inside me"
        ></input>
        <p className="parag">Drop your item model here</p>
        <input
          onChange={this.handlemodel}
          className="inp"
          placeholder="put your model name inside me"
        ></input>
        <p className="parag">Drop your item price here</p>
        <input
          onChange={this.handleprice}
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
