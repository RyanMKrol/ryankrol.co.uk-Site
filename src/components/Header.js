import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"

import SocialList from './SocialList'

import './Header.css'

const HEADER_ITEMS = [
  {
    destinationPage: "/",
    content: "Home",
  },
  {
    destinationPage: "/about",
    content: "About",
  },
]

class Header extends Component {
  generateHeaderLinks(props) {
    return HEADER_ITEMS.map((linkItem => {
      const activeClass = linkItem.destinationPage === props.location.pathname ?
        "currentPage" :
        ""

      return (
        <Link
          key={linkItem.destinationPage}
          className={`${activeClass} header-link hover`}
          to={linkItem.destinationPage}
        >
          {linkItem.content}
        </Link>
      )
    }))
  }

  render() {
    return (
      <div className="Header">
      <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <div className="header-content">
          <div className="social-container">
            <SocialList />
          </div>
          <div className="links-container">
            <div className="links">
              <div className="links-inner-container">
                {this.generateHeaderLinks(this.props)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
