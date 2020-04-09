import React, { Component } from "react";
import { Link } from "react-router-dom";
import css from "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page
    };
  }

  render() {
    console.log("page", this.state.page);
    return (
      <div>
        <nav>
          <a href="#" className="logo">
            <i class="fab fa-lyft"></i>
          </a>
          <div className={`navlinks ${this.props.page}`}>
            <Link to="/driver">DRIVER</Link>
            {this.state.page === "Driver" && (
              <div>
                <a href="#">Why Alem</a>
                <a href="#">Cities</a>
                <a href="#">Help</a>
              </div>
            )}

            <a href="#">RIDER</a>
            <a href="#">SHOPPING</a>
            <a href="#">PAYMENT</a>
            <a href="#">LOG IN</a>
          </div>
        </nav>
      </div>
    );
  }
}
