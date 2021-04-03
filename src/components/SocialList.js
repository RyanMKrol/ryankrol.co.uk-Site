import React from 'react';

import { SOCIAL_LIST_ITEMS } from '../data';

import './SocialList.css';

/**
 * Generates the links in the social bar
 *
 * @returns {string} HTML representing the links in the social bar
 */
function generateSocialListLinks() {
  return SOCIAL_LIST_ITEMS.map((item) => (
    <span className="socialListItem" key={item.link}>
      <a className="socialListLink" href={item.link}>
        {item.icon}
      </a>
    </span>
  ));
}

/**
 * Class representing a UI component for the SocialList
 *
 * @returns {string} The JSX representing the component
 */
function SocialList() {
  return <div className="SocialList">{generateSocialListLinks()}</div>;
}

export default SocialList;
