import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class DropdownSideBar extends Component {
  render() {
    return (
      <ul className="dropDown">
        <li>
          <NavLink onClick={this.props.toggleShowDropdown} to="/Login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink onClick={this.props.toggleShowDropdown} to="/Register">
            Register
          </NavLink>
        </li>
      </ul>
    );
  }
}
