import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';

const SOCIAL_LIST_ITEMS = [
  {
    link: 'https://www.facebook.com/krol.ryan',
    icon: <FontAwesomeIcon icon={faFacebook} size="lg" />,
  },
  {
    link: 'https://github.com/RyanMKrol',
    icon: <FontAwesomeIcon icon={faGithub} size="lg" />,
  },
  {
    link: 'https://www.instagram.com/gingerdude/',
    icon: <FontAwesomeIcon icon={faInstagram} size="lg" />,
  },
  {
    link: 'https://www.linkedin.com/in/ryan-krol-265308a2',
    icon: <FontAwesomeIcon icon={faLinkedin} size="lg" />,
  },
  {
    link: 'https://open.spotify.com/playlist/1n2Wuu0Ca4INGcFRcbavZS?si=oLvTTTKuQJCzlkcEXmdREA',
    icon: <FontAwesomeIcon icon={faSpotify} size="lg" />,
  },
];

export default SOCIAL_LIST_ITEMS;
