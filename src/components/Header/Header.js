import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './Header.module.css';

const HEADER_ITEMS = [
  {
    destination: '/ReadingList',
    title: 'reading list',
  },
  {
    destination: '/MoviesList',
    title: 'movies',
  },
  {
    destination: '/AlbumRatings',
    title: 'album ratings',
  },
  {
    destination: '/MovieRatings',
    title: 'movie ratings',
  },
];

/**
 * Internal class for rendering a header item
 */
class HeaderItem extends Component {
  /**
   * @class
   */
  constructor() {
    super();

    this.state = {
      isHovered: false,
    };

    this.handleHover = this.handleHover.bind(this);
  }

  /**
   * Handles hover events
   */
  handleHover() {
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered,
    }));
  }

  /**
   * Renders the component
   *
   * @returns {React.Component} JSX for individual header link
   */
  render() {
    const btnClass = this.state.isHovered ? 'highlighted' : '';
    return (
      <Link
        className={`${btnClass} light ${styles.link}`}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        to={this.props.destination}
      >
        <span className="highlighted">{this.props.index}. </span>
        {this.props.content}
      </Link>
    );
  }
}

/**
 * Generates the header links
 *
 * @returns {React.Component} JSX for link items
 */
const generateHeaderLinks = () => HEADER_ITEMS.map((linkItem, index) => (
    <HeaderItem
      key={linkItem.destination}
      content={linkItem.title}
      destination={linkItem.destination}
      index={index + 1}
    />
));

/**
 * Component for rendering common page heading
 *
 * @returns {React.Component} JSX Header component
 */
function Header() {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <Link className={`${styles.logo} highlighted`} to={'/'}>
          RK
        </Link>
        <div className={styles.links}>{generateHeaderLinks()}</div>
      </div>
    </div>
  );
}

export default withRouter(Header);
