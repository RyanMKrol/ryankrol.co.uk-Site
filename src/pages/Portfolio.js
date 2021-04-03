import React from 'react'

import { PortfolioItem } from './../components'
import { PORTFOLIO_PAGE_DATA } from './../data'

import './Portfolio.css'

function generatePortfolioItems() {
  return PORTFOLIO_PAGE_DATA.portfolioItems.map((item) =>
    <PortfolioItem
      key={item.portfolioHeader}
      portfolioMedia={item.portfolioMedia}
      portfolioDescription={item.portfolioDescription}
      portfolioHeader={item.portfolioHeader}
      portfolioItemLink={item.portfolioItemLink}
      portfolioItemTags={item.portfolioItemTags}
    />
  )
}

function generatePageSummary() {
  return (
    <div className="portfolio-page-summary">
      <h3>
        {PORTFOLIO_PAGE_DATA.summary}
      </h3>
    </div>
  )
}

function Portfolio() {
  return (
    <div className="page-body">
      <div className="Portfolio">
        {generatePageSummary()}
        {generatePortfolioItems()}
      </div>
    </div>
  )
}

export default Portfolio
