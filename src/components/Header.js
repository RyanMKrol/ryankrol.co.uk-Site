import React, { Component } from 'react'
import { Link } from "react-router-dom"

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="links-container">
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
