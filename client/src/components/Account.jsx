import React from "react";
import logo from "../logo/LogoMakr-2pyzuo.png";
import axios from "axios";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buy = this.buy.bind(this);
  }
  buy(e) {
    
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
          <div className="sum">
            <p className="sump">Your Pocket Amount Is :</p>
            <div className="sumf">{props.pocket}</div>
            <button onClick={this.buy} className="sumb">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
