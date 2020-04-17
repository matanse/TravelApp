import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CitiesFirst from "./CitiesFirst";
import CitiesSecond from "./CitiesSecond";
import CitiesThird from "./CitiesThird";
import "./css/cities.css";

export default class Cities extends Component {
  render() {
    const Cities = this.props.Cities;
    const first4Cities = [Cities[0], Cities[1], Cities[2], Cities[3]];
    const second4Cities = [Cities[4], Cities[5], Cities[6], Cities[7]];
    const third4Cities = [Cities[8], Cities[9], Cities[10], Cities[11]];
    // const divideCities = (citiesGroupe, start, end) => {
    //   for (let x = 0; start <= x <= end; x++) {
    //     citiesGroupe = [...citiesGroupe, cities[x]];
    //   }
    // };
    // divideCities(first4Cities, 0, 4);
    // divideCities(second4Cities, 5, 8);
    // divideCities(third4Cities, 9, 12);
    // console.log(second4Cities);
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
}
