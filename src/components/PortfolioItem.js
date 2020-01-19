import React, { Component } from 'react'

import './PortfolioItem.css';

class PortfolioItem extends Component {
  constructor(props) {
    super()

    this.portfolioMedia = props.portfolioMedia
    this.portfolioDescription = props.portfolioDescription
    this.portfolioHeader = props.portfolioHeader
    this.portfolioItemLink = props.portfolioItemLink
  }

  render() {
    return (
      <div className="PortfolioItem">
        <div className="portfolio-item-header">
          <h3>
            {this.portfolioHeader}
          </h3>
        </div>
        <div className="portfolio-item-content">
          <div className="portfolio-item-description">
            {this.portfolioDescription}
          </div>
          <div className="portfolio-item-image">
            {this.portfolioMedia}
          </div>
        </div>
        <div className="portfolio-project-link">
          <span className="portfolio-link">Check out the source code <a href={this.portfolioItemLink}>here</a>!</span>
        </div>
      </div>
    )
  }
}

export default PortfolioItem
