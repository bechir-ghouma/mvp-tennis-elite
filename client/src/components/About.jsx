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
      <div className="about">
        <img src={bechir} alt="me" className="me"></img>
        <p className="descr">
          <br></br>
          This is Bechir Ghouma , an ambitious student of RBK , <br></br>22
          years old , junior software developper and ex tennis player .<br></br>
          This is a project of a tennis store for the MVP Project <br></br>
          for the junior phase to pass to the senior made with much love.
          <br></br>
          Enjoy surfing in my website .
        </p>
      </div>
    );
  }
}

export default About;
