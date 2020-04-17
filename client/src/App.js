import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Header from "./components/Header";
import Welcome from "./screen/WelcomePage";
import Login from "./screen/Login";
import Register from "./screen/Register";
import Cities from "./components/Cities";
import picParis from "./img/Paris.jpg";
import picRome from "./img/Rome.jpg";
import picBerlin from "./img/Berlin.jpg";
import picNewYork from "./img/New-york.jpeg";
import picTelAviv from "./img/Tel-aviv.jpg";
import picAmsterdam from "./img/Amsterdam.jpg";

class App extends Component {
  state = {
    cities: [
      {
        pic: picRome,
        name: "Rome",
      },
      {
        pic: picNewYork,
        name: "New-York",
      },
      {
        pic: picParis,
        name: "Paris",
      },
      {
        pic: picTelAviv,
        name: "Tel-Aviv",
      },
      {
        pic: picNewYork,
        name: "New-York",
      },
      {
        pic: picNewYork,
        name: "New-York",
      },
      {
        pic: picAmsterdam,
        name: "Amsterdam",
      },
      {
        pic: picBerlin,
        name: "Berlin",
      },
      {
        pic: picTelAviv,
        name: "Tel-Aviv",
      },
      {
        pic: picParis,
        name: "Paris",
      },
      {
        pic: picNewYork,
        name: "New-York",
      },
      {
        pic: picParis,
        name: "Paris",
      },
    ],
    showDropdown: false,
  };

  toggleShowDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  };

  render() {
    return (
      <BrowserRouter>
        <header>
          <Header
            toggleShowDropdown={this.toggleShowDropdown}
            showDropdown={this.state.showDropdown}
          />
        </header>
        <Switch className="content">
          <Route exact path="/" component={Welcome} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
        <footer className="cities" style={{ width: "100%" }}>
          <Cities Cities={this.state.cities} />
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;
