import React, { Component } from "react";
import css from "./Footer.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="flex-container-footer flex-add">
          <div className="flex-cols" style={{ flexGrow: 1 }}>
            <h5>DRIVER</h5>
            <a href="#">Become a Driver</a>
            <br />
            <a href="#">Why Alem</a>
            <br />
            <a href="#">Cities</a>
            <br />
            <a href="#">Help</a>
            <br />
            <a href="#">Safety</a>
            <br />
            <a href="#">Improvements</a>
            <br />
            <a href="#">Subscribe to Drive</a>
            <br />
            <a href="#">Application Requirements</a>
            <br />
            <a href="#">Insuranve</a>
            <br />
            <a href="#">Bonus</a>
            <br />
            <a href="#">Earnings</a>
            <br />
            <a href="#">Jobs</a>
            <br />
          </div>
          <div className="flex-cols" style={{ flexGrow: 1 }}>
            <h5>RIDER</h5>
            <a href="#">Sign up to Ride</a>
            <br />
            <a href="#">Business Profile</a>
            <br />
            <a href="#">Cities</a>
            <br />
            <a href="#">Help</a>
            <br />
            <a href="#">Safety</a>
            <br />
            <a href="#">Events</a>
            <br />
            <a href="#">Fare Estimate</a>
            <br />
            <a href="#">Airports</a>
            <br />
            <a href="#">Promo Code</a>
            <br />
            <a href="#">Gift Vouchs</a>
            <br />
            <a href="#">All-Access Plan</a>
            <br />
            <a href="#">Round up & Donate</a>
            <br />
            <a href="#">Blog</a>
            <br />
          </div>
          <div className="flex-cols" style={{ flexGrow: 1 }}>
            <h5>ALEM</h5>
            <a href="#">Alem City Works</a>
            <br />
            <a href="#">Careers</a>
            <br />
            <a href="#">Business</a>
            <br />
            <a href="#">Car Rentals</a>
            <br />
            <a href="#">Developers</a>
            <br />
            <a href="#">Safety</a>
            <br />
            <a href="#">Bikes</a>
            <br />
            <a href="#">Scooters</a>
            <br />
            <a href="#">Press</a>
            <br />
            <a href="#">Investor Relations</a>
            <br />
          </div>
          <div style={({ flexGrow: 5 }, { paddingLeft: 50 })}>
            <h5>DOWNLOAD</h5>
            <button className="btn btn-primary"> ALEM DRIVER APP</button>
            <br />
            <button className="btn btn-primary"> ALEM RIDER APP</button>
          </div>
        </div>
      </div>
    );
  }
}
