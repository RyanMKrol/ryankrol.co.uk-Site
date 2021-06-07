import React, { Component } from 'react';

import styles from './MusicSubPage.module.css';

/**
 * Page for rendering sub-section of Music content
 */
class MusicSubPage extends Component {
  /**
   * @class
   */
  constructor() {
    super();
    this.content = 'content';
  }

  /**
   * Render method
   *
   * @returns {string} JSX Content
   */
  render() {
    return (
      <div>
        <h1>Ryan Krol.</h1>
        <h2>Here's my new design</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <span className="highlighted"> sed do eiusmod tempor incididunt ut</span> labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p className={styles.proofthatcssmoduleswork}>{this.content}</p>
      </div>
    );
  }
}

export default MusicSubPage;
