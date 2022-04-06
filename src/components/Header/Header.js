import React, { Component } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.svg'


class Header extends Component {

  render() {
    return (
      <header>
        <div className="container">
          <div className="navigation">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navMenu">
              <nav>
                <ul>
                  <li>home</li>
                  <li>servies</li>
                  <li>about</li>
                  <li>contact</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

    )
  }
}

export default Header