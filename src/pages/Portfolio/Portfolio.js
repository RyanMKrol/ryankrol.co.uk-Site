import React from 'react';

import { PortfolioItem } from '../../components';
import { PORTFOLIO_PAGE_DATA } from '../../data';

import './Portfolio.css';

/**
 * Generates portfolio items using portfolio items in the data store
 *
 * @returns {string} HTML for every portfolio item available to the page
 */
function generatePortfolioItems() {
  return PORTFOLIO_PAGE_DATA.portfolioItems.map((item) => (
    <PortfolioItem
      key={item.portfolioHeader}
      portfolioMedia={item.portfolioMedia}
      portfolioDescription={item.portfolioDescription}
      portfolioHeader={item.portfolioHeader}
      portfolioItemLink={item.portfolioItemLink}
      portfolioItemTags={item.portfolioItemTags}
    />
  ));
}

/**
 * Generates the summary line for the portfolio page
 *
 * @returns {string} HTML for the portfolio summary line
 */
function generatePageSummary() {
  return (
    <div className="portfolio-page-summary">
      <h3>{PORTFOLIO_PAGE_DATA.summary}</h3>
    </div>
  );
}

/**
 * Page to display my portfolio
 *
 * @returns {string} HTML for the page
 */
function Portfolio() {
  return (
    <div className="page-body">
      <div className="Portfolio">
        {generatePageSummary()}
        {generatePortfolioItems()}
      </div>
    </div>
  );
}

export default Portfolio;
