import React, { Component } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CitiesCarousel from "./CitiesCarousel";
import "./css/cities.css";

export default class Cities extends Component {
  state = { cities: [], loading: false };

  divideCities = (start, end) => {
    let list = [];
    for (let x = start; x <= end; x++) {
      list = [...list, this.state.cities[x]];
    }
    return list;
  };

  fetchCities = () => {
    axios
      .get("http://localhost:5000/cities/all")
      .then((res) => this.setState({ cities: res.data, loading: true }));
  };

  componentDidMount() {
    this.fetchCities();
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Popular MYtineraries</h3>
        {!this.state.loading ? (
          <div style={{ textAlign: "center" }}>
            <h1>Loading...</h1>
          </div>
        ) : (
          <Carousel>
            <div>
              <CitiesCarousel cities={this.divideCities(0, 3)} />
            </div>
            <div>
              <CitiesCarousel cities={this.divideCities(4, 7)} />
            </div>
            <div>
              <CitiesCarousel cities={this.divideCities(8, 11)} />
            </div>
          </Carousel>
        )}
      </div>
    );
  }
}
