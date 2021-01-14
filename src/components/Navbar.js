import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#">
              <li>HOME</li>
            </a>
            <a href="#">
              <li> MEN</li>
            </a>
            <a href="#">
              <li> WOMEN</li>
            </a>
            <a href="#">
              <li>LOOKBOOK</li>
            </a>
            <a href="#">
              <li>ABOUT</li>
            </a>
          </ul>
        </div>
        <div className="nav-item">
          <div>
            <img
              alt="ham-icon"
              src="https://www.flaticon.com/svg/static/icons/svg/876/876207.svg"
            />
          </div>

          <div>
            <h4>HOME</h4>
          </div>
          <div>
            <select name="gender" id="select">
              <option value="men"> MEN </option>
            </select>
          </div>
          <div>
            <select name="gender" id="select">
              <option value="women"> WOMEN </option>
            </select>
          </div>
          <div>
            <h4>LOOKBOOK</h4>
          </div>
          <div>
            <h4>ABOUT</h4>
          </div>
          <div>
            <h4>BLOG</h4>
          </div>
          <div id="search-icon">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/833/833300.svg"
              alt="icon"
            />
            <span id="pipe">|</span>
            <img
              alt="icon"
              src="https://www.flaticon.com/svg/static/icons/svg/93/93642.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
