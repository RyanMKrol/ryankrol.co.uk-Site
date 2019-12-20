import React from 'react'
import {
  faSpotify,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PORTFOLIO_ITEM_CONTENT = [
  {
    portfolioHeader: "Example Item",
    portfolioDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Sed nisi lacus sed viverra tellus. Morbi tincidunt ornare massa eget egestas. Pharetra magna ac placerat vestibulum. Et molestie ac feugiat sed lectus vestibulum mattis. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Non pulvinar neque laoreet suspendisse interdum consectetur. Tempus quam pellentesque nec nam aliquam sem et. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Sed faucibus turpis in eu. Habitant morbi tristique senectus et netus et malesuada fames ac.",
    portfolioMedia: (<p>
      Text that will eventually be an image
    </p>)
  },
  {
    portfolioHeader: "Example Item with Icon",
    portfolioDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Sed nisi lacus sed viverra tellus. Morbi tincidunt ornare massa eget egestas. Pharetra magna ac placerat vestibulum. Et molestie ac feugiat sed lectus vestibulum mattis. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Non pulvinar neque laoreet suspendisse interdum consectetur. Tempus quam pellentesque nec nam aliquam sem et. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Sed faucibus turpis in eu. Habitant morbi tristique senectus et netus et malesuada fames ac.",
    portfolioMedia: (
      <FontAwesomeIcon
        icon={faSpotify}
        size="6x"
      />
    )
  }
]

export {
  PORTFOLIO_ITEM_CONTENT
}
