import React, { Component } from 'react';

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import themeContext from '../../context/themeContext';
import HeaderStyles from './HeaderStyles';
import logo from '../../assets/images/logo.svg';

import { Link } from 'react-scroll';

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
                  <li className='item'>
                    <Link to="home" smooth spy>
                      Home
                    </Link>
                  </li>
                  <li className='item'>
                    <Link to="services" smooth spy>
                      Services
                    </Link>
                  </li>
                  <li className='item'>
                    <Link to="about" smooth spy>
                      About
                    </Link>
                  </li>
                  <li className='item'>
                    <Link to="contact" smooth spy>
                      Contact
                    </Link>
                  </li>
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