import React from "react";
import logo from "../logo/LogoMakr-2pyzuo.png";

const Navbar = (props) => (
  <div>
    <div className="wrapper">
      <nav className="shodow">
        <ul className="list">
          <li onClick={() => props.changeView("home")}>
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
                searching={props.searching}
                data={props.data}
              ></input>
            </a>
          </li>
          <li className="btn">
            <a href="#" className="iconn">
              <div onClick={() => props.changeView("account")}>
                {/* <img src={account} alt="account" className="icon" /> */}
                <small className="none">Account</small>
              </div>
            </a>
          </li>
          &nbsp;
          <li className="btn">
            <a className="iconn" onClick={() => props.changeView("about")}>
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
              <small className="none">Feedback</small>
            </a>
          </li>
          &nbsp;
          <li className="btn" onClick={() => props.changeView("post")}>
            <a href="#" className="iconn">
              <small className="none">Posts</small>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="category">
      <ul>
        <a
          href="#"
          onClick={() => props.changeView("rackets")}
          handleClick={props.handleClick}
        >
          Tennis Rackets
        </a>
        <a
          href="#"
          onClick={() => props.changeView("shoes")}
          handleClick={props.handleClick}
        >
          Tennis Shoes
        </a>
        <a
          href="#"
          onClick={() => props.changeView("bags")}
          handleClick={props.handleClick}
        >
          Tennis Bags
        </a>
        <a
          href="#"
          onClick={() => props.changeView("backpacks")}
          handleClick={props.handleClick}
        >
          Tennis Backpack
        </a>
        <a
          href="#"
          onClick={() => props.changeView("clothes")}
          handleClick={props.handleClick}
        >
          Tennis Clothes
        </a>
      </ul>
    </div>
  </div>
);

export default Navbar;
