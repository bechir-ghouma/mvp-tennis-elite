import React from "react";
// import account from "../logo/LogoMakr-8MvvF1.png";
import logo from "../logo/LogoMakr-2pyzuo.png";
import About from "./About.jsx";
import Search from "./Search.jsx";
import axios from "axios";
import Wilson from "./Wilson.jsx";
import Nike from "./Nike.jsx";
import Head from "./Head.jsx";
import Babolat from "./Babolat.jsx";
import Diadora from "./Diadora.jsx";
import Account from "./Account.jsx";
import Clothes from "./Clothes.jsx";
import Shoes from "./Shoes.jsx";
import Rackets from "./Rackets.jsx";
import Bags from "./Bags.jsx";
import Backpack from "./Backpack.jsx";
import Post from "./Post.jsx";
import MyPosts from "./MyPosts.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wilson: [],
      nike: [],
      head: [],
      babolat: [],
      diadora: [],
      backpacks: [],
      bags: [],
      clothes: [],
      shoes: [],
      rackets: [],
      items: [],
      view: "home",
      pocket: 0,
      counter: 0,
      word: "",
      data: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderView = this.renderView.bind(this);
    this.changeView = this.changeView.bind(this);
    this.searching = this.searching.bind(this);
    this.fetch = this.fetch.bind(this);
  }
  componentDidMount() {
    axios
      .get("/wilson")
      .then((result) => {
        console.log(result.data, "hgfd");
        this.setState({ wilson: result.data });
        this.fetch();
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/nike")
      .then((result) => {
        this.setState({ nike: result.data });
        this.fetch();
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/head")
      .then((result) => {
        this.setState({ head: result.data });
        this.fetch();
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/babolat")
      .then((result) => {
        this.setState({ babolat: result.data });
        this.fetch();
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/diadora")
      .then((result) => {
        this.setState({ diadora: result.data });
        this.fetch();
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/getme")
      .then((result) => {
        this.setState({ items: result.data });
        this.fetch();
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/shoes")
      .then((result) => {
        this.setState({ shoes: result.data });
        this.fetch();
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/backpack")
      .then((result) => {
        this.setState({ backpacks: result.data });
        this.fetch();
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/bags")
      .then((result) => {
        this.setState({ bags: result.data });
        this.fetch();
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/clothes")
      .then((result) => {
        this.setState({ clothes: result.data });
        this.fetch();
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/rackets")
      .then((result) => {
        this.setState({ rackets: result.data });
        this.fetch();
      })
      .catch((err) => {
        console.error(err);
      });
    this.fetch();
  }

  renderView() {
    const { view } = this.state;
    console.log(view);
    if (view === "home") {
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
                      searching={this.searching}
                      data={this.state.data}
                    ></input>
                  </a>
                </li>
                <li className="btn">
                  <a href="#" className="iconn">
                    <div
                      onClick={() => this.changeView("account")}
                      renderView={() => this.renderView()}
                    >
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
                    <small className="none">Feedback</small>
                  </a>
                </li>
                &nbsp;
                <li className="btn" onClick={() => this.changeView("post")}>
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
                onClick={() => this.changeView("rackets")}
                handleClick={this.handleClick}
              >
                Tennis Rackets
              </a>
              <a
                href="#"
                onClick={() => this.changeView("shoes")}
                handleClick={this.handleClick}
              >
                Tennis Shoes
              </a>
              <a
                href="#"
                onClick={() => this.changeView("bags")}
                handleClick={this.handleClick}
              >
                Tennis Bags
              </a>
              <a
                href="#"
                onClick={() => this.changeView("backpacks")}
                handleClick={this.handleClick}
              >
                Tennis Backpack
              </a>
              <a
                href="#"
                onClick={() => this.changeView("clothes")}
                handleClick={this.handleClick}
              >
                Tennis Clothes
              </a>
            </ul>
          </div>
          <p className="brands">Wilson Products</p>
          <Wilson wilson={this.state.wilson} handleClick={this.handleClick} />
          <br></br>
          <p className="brands">Nike Products</p>
          <Nike nike={this.state.nike} handleClick={this.handleClick} />
          <br></br>
          <p className="brands">Head Products</p>
          <Head head={this.state.head} handleClick={this.handleClick} />
          <br></br>
          <p className="brands">Babolat Products</p>
          <Babolat
            babolat={this.state.babolat}
            handleClick={this.handleClick}
          />
          <br></br>
          <p className="brands">Diadora Products</p>
          <Diadora
            diadora={this.state.diadora}
            handleClick={this.handleClick}
          />
          <p className="brands">My Posted Products</p>
          <MyPosts items={this.state.items} deleteItem={this.deleteItem} />
          <br></br>
          <br></br>
          <p className="copy">copyright boshreem</p>
        </div>
      );
    } else if (view === "shoes") {
      return <Shoes shoes={this.state.shoes} handleClick={this.handleClick} />;
    } else if (view === "rackets") {
      return (
        <Rackets rackets={this.state.rackets} handleClick={this.handleClick} />
      );
    } else if (view === "clothes") {
      return (
        <Clothes clothes={this.state.clothes} handleClick={this.handleClick} />
      );
    } else if (view === "bags") {
      return <Bags bags={this.state.bags} handleClick={this.handleClick} />;
    } else if (view === "backpacks") {
      return (
        <Backpack
          backpacks={this.state.backpacks}
          handleClick={this.handleClick}
        />
      );
    } else if (view === "account") {
      return (
        <Account pocket={this.state.pocket} handleClick={this.handleClick} />
      );
    } else if (view === "about") {
      return <About handleClick={this.handleClick} />;
    } else if (view === "post") {
      return <Post handleClick={this.handleClick} />;
    }
  }
  changeView(view) {
    this.setState({
      view: view,
    });
  }
  //PATCH /cart/:tables  /:id

  handleClick(price) {
    if (this.state.counter >= 1) {
      this.setState({
        pocket: this.state.pocket + price,
        counter: this.state.counter + 1,
      });
    } else {
      this.setState({
        pocket: price,
        counter: this.state.counter + 1,
      });
    }
  }
  deleteItem(e) {
    axios
      .delete(`/${e.target.id}`)
      .then((response) => console.log("deleted"))
      .catch((err) => console.log(err));
  }
  searching(mot) {
    this.setState({ word: word });
  }
  fetch() {
    axios
      .get("/wilson")
      .then((result) => {
        console.log(result.data);
        this.setState({ data: result.data });
        // console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/nike")
      .then((result) => {
        this.setState({ data: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/head")
      .then((result) => {
        this.setState({ data: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/babolat")
      .then((result) => {
        this.setState({ data: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/diadora")
      .then((result) => {
        this.setState({ data: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/getme")
      .then((result) => {
        this.setState({ data: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/shoes")
      .then((result) => {
        this.setState({ data: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/backpack")
      .then((result) => {
        this.setState({ data: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/bags")
      .then((result) => {
        this.setState({ data: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/clothes")
      .then((result) => {
        this.setState({ data: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("/rackets")
      .then((result) => {
        this.setState({ data: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return <>{this.renderView()}</>;
  }
}
export default Home;
