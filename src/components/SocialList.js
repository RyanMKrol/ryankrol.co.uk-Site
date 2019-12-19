import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons'

import './SocialList.css';

class SocialList extends Component {
  render() {
    return (
      <div className="SocialList">
        <span className="socialListItem">
          <a className="socialListLink" href="https://www.facebook.com/krol.ryan">
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
            />
          </a>
        </span>
        <span className="socialListItem">
          <a className="socialListLink" href="https://github.com/RyanMKrol">
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
            />
          </a>
        </span>
        <span className="socialListItem">
          <a className="socialListLink" href="https://www.instagram.com/gingerdude/">
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
            />
          </a>
        </span>
        <span className="socialListItem">
          <a className="socialListLink" href="https://www.linkedin.com/in/ryan-krol-265308a2">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
            />
          </a>
        </span>
        <span className="socialListItem">
          <a className="socialListLink" href="https://open.spotify.com/playlist/37i9dQZF1Et9XpQOerWV6B">
            <FontAwesomeIcon
              icon={faSpotify}
              size="lg"
            />
          </a>
        </span>
      </div>
    )
  }
}

export default SocialList
