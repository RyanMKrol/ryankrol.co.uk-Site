import React, { Component } from 'react'
import { Link } from "react-router-dom"

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="links-container">
          <div className="links">
            <div className="links-inner-container">
              <Link className="header-link" to="/">Home</Link>
              <Link className="header-link" to="/about">About</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
