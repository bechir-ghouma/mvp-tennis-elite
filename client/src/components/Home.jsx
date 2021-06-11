import React from "react";
import logo from "../logo/LogoMakr-2pyzuo.png";
import about from "../logo/LogoMakr-9YYT09.png";
import facebook from "../logo/LogoMakr-6aVHrR.png";
import sponsor from "../logo/Capture d’écran 2021-05-16 003123.png";
import axios from "axios";
import Wilson from "./Wilson.jsx";
import Nike from "./Nike.jsx";
import Head from "./Head.jsx";
import Babolat from "./Babolat.jsx";
import Diadora from "./Diadora.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wilson: [],
      nike: [],
      head: [],
      babolat: [],
      diadora: [],
      view: "home",
    };
  }
  componentDidMount() {
    axios
      .get("/wilson")
      .then((result) => {
        this.setState({ wilson: result.data });
        // console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/nike")
      .then((result) => {
        this.setState({ nike: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/head")
      .then((result) => {
        this.setState({ head: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/babolat")
      .then((result) => {
        this.setState({ babolat: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/diadora")
      .then((result) => {
        this.setState({ diadora: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  changeView(view) {
    this.setState({
      view: view,
    });
  }
  renderView() {
    const { view } = this.state;
    if (view === "home") {
      return <Home />;
    } else if (view === "shoes") {
      return <Shoes />;
    } else if (view === "rackets") {
      return <Rackets />;
    } else if (view === "clothes") {
      return <Clothes />;
    } else if (view === "bags") {
      return <Bags />;
    } else if (view === "backpacks") {
      return <Backpack />;
    }
  }
  render() {
    return (
      <div>
        <nav>
          <img src={logo} alt="logo" />
          <input type="text" placeholder=" search..."></input>
          <ul>
            <li>
              <div>
                {/* put your change view in a tag */}
                <img src="account" alt="account" />
                <small>My Account</small>
              </div>
            </li>
            <li>
              <a href="about.html">
                <img src={about} alt="contact" />
                <small>About Us</small>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/bechir.ghouma.104/">
                <img src={facebook} alt="facebook" />
                <small>Feedback</small>
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>Tennis Rackets</li>
            <li>Tennis Shoes</li>
            <li>Tennis Bags</li>
            <li>Tennis Backpack</li>
            <li>Strings and Balls</li>
            <li>Tennis Clothes</li>
            {/* make shadow for them */}
          </ul>
        </nav>
        <Wilson wilson={this.state.wilson} />
        <Nike nike={this.state.nike} />
        <Head head={this.state.head} />
        <Babolat babolat={this.state.babolat} />
        <Diadora diadora={this.state.diadora} />
        <img src={sponsor} alt="sponsor" />
      </div>
    );
  }
}
export default Home;
