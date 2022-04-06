import React, { Component } from 'react'


class Header extends Component {

  render() {
    return (
      <div className="container">
        <div className="navigation">
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
    )
  }
}

export default Header