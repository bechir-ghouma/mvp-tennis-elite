import React from "react";
import logo from "../logo/LogoMakr-2pyzuo.png";
import axios from "axios";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buy = this.buy.bind(this);
  }
  buy(e) {
    if (this.props.pocket === 0) {
      swal.fire({
        icon: "error",
        title: "Error",
        text: "Choose something to buy first",
      });
    }
    if (this.props.pocket > 0) {
      swal.fire({
        icon: "success",
        title: "Success",
        text: "You will recieve your staff in 2 days",
      });
    }
  }
  render() {
    return (
      <div className="sum">
        <p className="sump">Your Pocket Amount Is :</p>
        <div className="sumf">{this.props.pocket}</div><br></br><br></br>
        <button onClick={this.buy} className="sumb">
          Buy Now
        </button>
      </div>
    );
  }
}

export default Account;
