import React, { Component } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CitiesFirst from "./CitiesFirst";
import CitiesSecond from "./CitiesSecond";
import CitiesThird from "./CitiesThird";
import "./css/cities.css";

export default class Cities extends Component {
  state = { cities: [], firstCities: [] };

  fetchCities = () => {
    axios.get("http://localhost:5000/cities/all").then((res) => {
      this.setState({ cities: res.data });
      this.setState({ firstCities: this.divideCities(0, 3) });
      console.log(this.state.cities);
    });
  };

  divideCities = (start, end) => {
    let list = [];
    for (let x = 0; start <= x <= end; x++) {
      list = [...list, this.state.cities[x]];
    }
    console.log(list);
    return list;
  };

  componentDidMount() {
    this.fetchCities();
    // this.setState({ firstCities: this.divideCities(0, 3) });
  }

  render() {
    // const cities = this.state.cities;
    // const first4Cities = [cities[0], cities[1], cities[2], cities[3]];
    // const second4Cities = [cities[4], cities[5], cities[6], cities[7]];
    // const third4Cities = [cities[8], cities[9], cities[10], cities[11]];
    console.log(this.state.cities);
    return this.state.cities !== [] ? (
      <div style={{ textAlign: "center" }}>
        <h3>Popular MYtineraries</h3>
        <Carousel>
          <div>
            {/* {" "}
            {this.state.firstCities !== [] && (
              // <CitiesFirst cities={this.state.firstCities} />
            )}{" "} */}
          </div>
          <div>{/* <CitiesSecond cities={second4Cities} /> */}</div>
          <div>{/* <CitiesThird cities={third4Cities} /> */}</div>
        </Carousel>
      </div>
    ) : null;
  }
}
