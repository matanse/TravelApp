import React, { Component } from "react";

export default class Search extends Component {
  state = {
    query: "",
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    });
  };

  render() {
    return (
      <form>
        <input
          placeholder="Type in a city..."
          ref={(input) => (this.search = input)}
          onKeyUp={this.props.handleSearchChange}
        />
      </form>
    );
  }
}
