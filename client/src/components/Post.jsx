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
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.placeholder]: e.target.value,
    });
  }
  postme(event) {
    if (this.state.url.length === 0) {
      swal.fire({
        icon: "error",
        title: "Error",
        text: "Please make sure to fill your product details",
      });
    } else {
      swal.fire({
        icon: "Success",
        title: "Success",
        text: "Posted !!",
      });
    }
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
        <div className="wrapper">
          <nav className="shodow">
            <ul className="list">
              <li>
                <a href="/">
                  <img src={logo} alt="logo" className="logo" />
                </a>
              </li>
              <li>
                <a>
                  <input
                    type="text"
                    placeholder=" search..."
                    className="search"
                  ></input>
                </a>
              </li>
              <li className="btn">
                <a href="#" className="iconn">
                  <div onClick={() => this.changeView("account")}>
                    {/* <img src={account} alt="account" className="icon" /> */}
                    <small className="none">Account</small>
                  </div>
                </a>
              </li>
              &nbsp;
              <li className="btn">
                <a className="iconn" onClick={() => this.changeView("about")}>
                  {/* <img src={about} alt="contact" className="icon"/> */}
                  <small className="none">About</small>
                </a>
              </li>
              &nbsp;
              <li className="btn">
                <a
                  href="https://www.facebook.com/bechir.ghouma.104/"
                  className="iconn"
                >
                  {/* <img src={facebook} alt="facebook" className="icon"/> */}
                  <small className="none">Feedback</small>
                </a>
              </li>
              &nbsp;
              <li className="btn">
                <a href="#" className="iconn">
                  {/* <img src={myPosts} alt="myPosts" className="icon"/> */}
                  <small className="none">Posts</small>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="category">
          <ul>
            <a href="#" onClick={() => this.changeView("rackets")}>
              Tennis Rackets
            </a>
            <a href="#" onClick={() => this.changeView("shoes")}>
              Tennis Shoes
            </a>
            <a href="#" onClick={() => this.changeView("bags")}>
              Tennis Bags
            </a>
            <a href="#" onClick={() => this.changeView("backpacks")}>
              Tennis Backpack
            </a>
            <a href="#" onClick={() => this.changeView("clothes")}>
              Tennis Clothes
            </a>
          </ul>
        </div>
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
      </div>
    );
  }
}
export default Post;
