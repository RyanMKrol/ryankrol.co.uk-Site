import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import PortfolioItem from './../PortfolioItem'

const defaultArgs = {
  portfolioHeader: "Example Item",
  portfolioItemLinkHeader: "http://example.com",
  portfolioDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Sed nisi lacus sed viverra tellus. Morbi tincidunt ornare massa eget egestas. Pharetra magna ac placerat vestibulum. Et molestie ac feugiat sed lectus vestibulum mattis. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Non pulvinar neque laoreet suspendisse interdum consectetur. Tempus quam pellentesque nec nam aliquam sem et. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Sed faucibus turpis in eu. Habitant morbi tristique senectus et netus et malesuada fames ac.",
  portfolioMedia: (<p>
    Text that will eventually be an image
  </p>)
}

// Render Tests

it('renders PortfolioItem correctly', () => {
    const portfolioItem = shallow(
      <PortfolioItem {...defaultArgs}/>)
    expect(toJson(portfolioItem)).toMatchSnapshot()
})

it('renders PortfolioItem without throwing', () => {
    expect(() => mount(<PortfolioItem {...defaultArgs}/>)).not.toThrow()
})
