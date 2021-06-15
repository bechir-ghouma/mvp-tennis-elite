import React from "react";
import About from "./About.jsx";
import Search from "./Search.jsx";
import ItemList from "./ItemList.jsx";
import Navbar from "./Navbar.jsx";
import axios from "axios";
import Account from "./Account.jsx";
import Post from "./Post.jsx";
import MyPosts from "./MyPosts.jsx";
import Categories from "./CategoryList.jsx";

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
    Promise.all(
      [
        "wilson",
        "babolat",
        "diadora",
        "nike",
        "head",
        "shoes",
        "backpack",
        "bags",
        "clothes",
        "rackets",
      ].map((category) =>
        axios.get("/" + category).then((result) => {
          this.setState({ [category]: result.data });
        })
      )
    );
    axios.get("/getme").then((result) => {
      this.setState({ items: result.data });
      // this.fetch();
    });
  }

  renderView() {
    const { view } = this.state;
    if (view === "home") {
      return (
        <>
          <p className="brands">Wilson Products</p>
          <ItemList items={this.state.wilson} handleClick={this.handleClick} />
          <br></br>
          <p className="brands">Nike Products</p>
          <ItemList items={this.state.nike} handleClick={this.handleClick} />
          <br></br>
          <p className="brands">Head Products</p>
          <ItemList items={this.state.head} handleClick={this.handleClick} />
          <br></br>
          <p className="brands">Babolat Products</p>
          <ItemList items={this.state.babolat} handleClick={this.handleClick} />
          <br></br>
          <p className="brands">Diadora Products</p>
          <ItemList items={this.state.diadora} handleClick={this.handleClick} />
          <p className="brands">My Posted Products</p>
          <MyPosts items={this.state.items} deleteItem={this.deleteItem} />
          <br></br>
          <br></br>
          <p className="copy">copyright boshreem</p>
        </>
      );
    } else if (view === "shoes") {
      return (
        <Categories
          categories={this.state.shoes}
          handleClick={this.handleClick}
        />
      );
    } else if (view === "rackets") {
      return (
        <Categories
          categories={this.state.rackets}
          handleClick={this.handleClick}
        />
      );
    } else if (view === "clothes") {
      return (
        <Categories
          categories={this.state.clothes}
          handleClick={this.handleClick}
        />
      );
    } else if (view === "bags") {
      return (
        <Categories
          categories={this.state.bags}
          handleClick={this.handleClick}
        />
      );
    } else if (view === "backpacks") {
      return (
        <Categories
          categories={this.state.backpack}
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
  deleteItem(id) {
    axios
      .delete(`/post/${id}`)
      .then((response) => console.log("deleted"))
      .catch((err) => console.log(err));
  }
  searching(word) {
    this.setState({ word: word });
  }
  fetch() {}
  render() {
    return (
      <>
        <Navbar
          changeView={this.changeView}
          handleClick={this.handleClick}
          searching={this.searching}
          data={this.state.data}
          products={this.state}
        />
        {this.renderView()}
      </>
    );
  }
}
export default Home;
