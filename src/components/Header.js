import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SocialList from './SocialList';
import { HEADER_ITEMS } from '../data/HeaderData';

import './Header.css';

/**
 * Object representing the location of the page
 *
 * @typedef {object} LocationObject
 * @property {string} pathname What URL the page is currently on
 */

/**
 * Object representing the props to the Header
 *
 * @typedef {object} HeaderProps
 * @property {LocationObject} location Object representing the current URL
 */

/**
 * Class representing a UI component for an album
 */
class Header extends Component {
  /**
   * Generates the links used in the header
   *
   * @returns {string} HTML markup for the header link
   */
  generateHeaderLinks() {
    return HEADER_ITEMS.map((linkItem) => {
      const activeClass = linkItem.destinationPage === this.props.location.pathname ? 'currentPage' : '';

      return (
        <Link
          key={linkItem.destinationPage}
          className={`${activeClass} header-link hover`}
          to={linkItem.destinationPage}
        >
          {linkItem.content}
        </Link>
      );
    });
  }

  /**
   * Render method
   *
   * @returns {React.Component} The JSX representing the component
   */
  render() {
    return (
      <div className="Header">
        <div className="header-content">
          <div className="social-container">
            <SocialList />
          </div>
          <div className="header-name">Ryan Krol</div>
          <div className="links-container">
            <div className="links">
              <div className="links-inner-container">{this.generateHeaderLinks()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
