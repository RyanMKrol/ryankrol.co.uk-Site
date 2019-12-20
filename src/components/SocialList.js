import React, { Component } from 'react'

import { SOCIAL_LIST_ITEMS } from './../data/SocialListData'

import './SocialList.css';

class SocialList extends Component {
  generateSocialListLinks() {
    return SOCIAL_LIST_ITEMS.map((item) => (
      <span className="socialListItem" key={item.link}>
        <a
          className="socialListLink"
          href={item.link}
        >
          {item.icon}
        </a>
      </span>
    ))
  }

  render() {
    return (
      <div className="SocialList">
        {this.generateSocialListLinks()}
      </div>
    )
  }
}

export default SocialList
