import React, { Component } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CitiesCarousel from "./CitiesCarousel";
import SearchBar from "./SearchBar";
import "./css/cities.css";

export default class Cities extends Component {
  state = { cities: [], loading: false, search: "" };

  fetchCities = () => {
    axios
      .get("http://localhost:5000/cities/all")
      .then((res) => this.setState({ cities: res.data, loading: true }));
  };

  componentDidMount() {
    this.fetchCities();
  }

  handleSearchChange = (e) => {
    let searchValue = e.target.value.toUpperCase();
    this.setState({ search: searchValue });
  };

  divideCities = (start, end) => {
    let list = [];
    for (let x = start; x <= end; x++) {
      if (this.state.cities[x].Name.toUpperCase().includes(this.state.search)) {
        list = [...list, this.state.cities[x]];
      }
    }
    return list;
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Popular MYtineraries</h3>
        <SearchBar handleSearchChange={this.handleSearchChange} />
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
