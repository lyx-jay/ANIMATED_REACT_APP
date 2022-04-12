import React, { Component } from 'react';

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import themeContext from '../../context/themeContext';
import HeaderStyles from './HeaderStyles';
import logo from '../../assets/images/logo.svg';

class Header extends Component {
  render() {
    return (
      <HeaderStyles mode={this.context.theme}>
        <div className="container">
          <div className="navigation">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navMenu">
              <nav>
                <ul>
                  <li className='item'>Servies</li>
                  <li className='item'>Home</li>
                  <li className='item'>About</li>
                  <li className='item'>Contact</li>
                  <ThemeToggle />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </HeaderStyles>

    )
  }
}

Header.contextType = themeContext;

export default Header