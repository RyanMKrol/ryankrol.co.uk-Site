import React from 'react'
import {
  faSpotify,
} from '@fortawesome/free-brands-svg-icons'
import {
  faToolbox
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PORTFOLIO_ITEM_CONTENT = [
  {
    portfolioHeader: "SwiftToolbox",
    portfolioItemLink: "https://github.com/RyanMKrol/SwiftToolbox",
    portfolioDescription: "SwiftToolbox is a project I started when I started using Swift more in my personal projects. I found myself repeating code across projects, so I thought it would be a good idea to have a package to share utilities I made to prevent code duplication.",
    portfolioMedia: (
      <FontAwesomeIcon
        icon={faToolbox}
        size="6x"
      />
    )
  }
]

export { PORTFOLIO_ITEM_CONTENT }
