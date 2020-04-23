import React, { Component } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CitiesFirst from "./CitiesFirst";
import CitiesSecond from "./CitiesSecond";
import CitiesThird from "./CitiesThird";
import "./css/cities.css";

export default class Cities extends Component {
  state = {};

  // divideCities = (start, end) => {
  //   let list = [];
  //   for (let x = 0; start <= x <= end; x++) {
  //     list = [...list, cities[x]];
  //   }
  // };

  fetchCities = () => {
    axios
      .get("http://localhost:5000/cities/all")
      .then((res) => this.setState({ cities: res.data }));
  };

  componentDidMount() {
    this.fetchCities();
  }

  render() {
    if (this.state.cities === undefined) {
      return (
        <div style={{ textAlign: "center" }}>
          <h1>Loding...</h1>
        </div>
      );
    } else {
      // console.log(this.state.cities);
      const cities = this.state.cities;
      const first4Cities = [cities[0], cities[1], cities[2], cities[3]];
      const second4Cities = [cities[4], cities[5], cities[6], cities[7]];
      const third4Cities = [cities[8], cities[9], cities[10], cities[11]];
      return (
        <div style={{ textAlign: "center" }}>
          <h3>Popular MYtineraries</h3>
          <Carousel>
            <div>
              <CitiesFirst cities={first4Cities} />
            </div>
            <div>
              <CitiesSecond cities={second4Cities} />
            </div>
            <div>
              <CitiesThird cities={third4Cities} />
            </div>
          </Carousel>
        </div>
      );
    }

    // const
    // divideCities(first4Cities, 0, 4);
    // divideCities(second4Cities, 5, 8);
    // divideCities(third4Cities, 9, 12);
    // console.log(second4Cities);
  }
}
