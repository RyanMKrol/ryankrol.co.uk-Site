import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import PortfolioItem from './../PortfolioItem'

it('renders PortfolioItem correctly', () => {
    const portfolioItem = shallow(
      <PortfolioItem />)
    expect(toJson(portfolioItem)).toMatchSnapshot()
})

it('renders PortfolioItem without throwing', () => {
    expect(() => mount(<PortfolioItem />)).not.toThrow()
})
