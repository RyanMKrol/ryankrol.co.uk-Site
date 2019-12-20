import React from 'react'

import { PortfolioItem } from './../components'
import { PORTFOLIO_ITEM_CONTENT } from './../data/PortfolioData'

import './Portfolio.css'

function generatePortfolioItems() {
  return PORTFOLIO_ITEM_CONTENT.map((item) =>
    <PortfolioItem
      key={item.portfolioHeader}
      portfolioMedia={item.portfolioMedia}
      portfolioDescription={item.portfolioDescription}
      portfolioHeader={item.portfolioHeader}
    />
  )
}

function Portfolio() {
  return (
    <div className="container">
      <div className="Portfolio">
        {generatePortfolioItems()}
      </div>
    </div>
  )
}

export default Portfolio
