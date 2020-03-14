import React, { Component } from 'react'
import {
  Link,
  withRouter
} from "react-router-dom"
import SocialList from './SocialList'
import { HEADER_ITEMS } from './../data/HeaderData'

import './Header.css'

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
        <div className="header-content">
          <div className="social-container">
            <SocialList />
          </div>
          <div className="header-name">
            Ryan Krol
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
