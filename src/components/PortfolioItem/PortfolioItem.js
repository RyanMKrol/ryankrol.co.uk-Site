import React, { Component } from 'react';

import './PortfolioItem.css';

/**
 * Object representing the props to a PortfolioItem
 *
 * @typedef {object} PortfolioItemProps
 * @property {string} portfolioMedia Icon representing this portfolio item
 * @property {string} portfolioDescription Description of this portfolio item
 * @property {string} portfolioHeader Heading for this portfolio item
 * @property {string} portfolioItemLink Links for the portfolio item
 * @property {Array<string>} portfolioItemTags Tags for the portfolio item
 */

/**
 * Class representing a UI component for a PortfolioItem
 */
class PortfolioItem extends Component {
  /**
   * @param {PortfolioItemProps} props Arguments to build the widget
   */
  constructor(props) {
    super();

    this.portfolioMedia = props.portfolioMedia;
    this.portfolioDescription = props.portfolioDescription;
    this.portfolioHeader = props.portfolioHeader;
    this.portfolioItemLink = props.portfolioItemLink;
    this.portfolioItemTags = props.portfolioItemTags;
  }

  /**
   * Generates the tags for this portfolio item
   *
   * @returns {string} HTML representing the tag
   */
  generateTags() {
    return this.portfolioItemTags.map((tag) => (
      <span key={`${this.portfolioHeader} - ${tag}`} className="portfolio-item-tag">
        {tag}
      </span>
    ));
  }

  /**
   * Render method
   *
   * @returns {string} The JSX representing the component
   */
  render() {
    return (
      <div className="PortfolioItem">
        <div className="portfolio-item-header">
          <h3>{this.portfolioHeader}</h3>
        </div>
        <div className="portfolio-item-content">
          <div className="portfolio-item-description">{this.portfolioDescription}</div>
          <div className="portfolio-item-image">{this.portfolioMedia}</div>
        </div>
        <div className="portfolio-project-link">
          <span className="portfolio-item-link">
            Check out the source code <a href={this.portfolioItemLink}>here</a>!
          </span>
        </div>
        <div className="portfolio-project-tags">{this.generateTags()}</div>
      </div>
    );
  }
}

export default PortfolioItem;
