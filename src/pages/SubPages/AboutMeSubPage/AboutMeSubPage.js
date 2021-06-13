import React, { Component } from 'react';

/**
 * Page to mess around
 */
class AboutMeSubPage extends Component {
  /**
   * @class
   */
  constructor() {
    super();
    this.content = (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        <span className="highlighted"> sed do eiusmod tempor incididunt ut</span> labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
    );
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
        <h2>Welcome to my new website!</h2>
        {this.content}
      </div>
    );
  }
}

export default AboutMeSubPage;
