import React from "react";
import logo from "../logo/LogoMakr-2pyzuo.png";
import bechir from "../logo/84301280_498455821071519_1608256697330040832_n.jpg";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    this.setState({ view: !this.state.view });
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
        <div className="about">
          <img src={bechir} alt="me" className="me"></img>
          <p className="descr">
            <br></br>
            This is Bechir Ghouma , an ambitious student of RBK , <br></br>22
            years old , junior software developper and ex tennis player .
            <br></br>
            This is a project of a tennis store for the MVP Project <br></br>
            for the junior phase to pass to the senior made with much love.
            <br></br>
            Enjoy surfing in my website .
          </p>
        </div>
      </div>
    );
  }
}

export default About;
