import React from "react";

export default function Nav(props) {
  if (this.props.showNavBar) {
    return (
      <ul className="nav">
        <li>
          <Link to="./screen/Welcome">Welcome</Link>
        </li>
        <li>
          <Link to="./screen/Login">Login</Link>
        </li>
        <li>
          <Link to="./screen/Register">Register</Link>
        </li>
      </ul>
    );
  }
}
