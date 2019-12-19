import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import SocialList from './../SocialList'

it('renders SocialList correctly', () => {
    const socialList = shallow(
      <SocialList />)
    expect(toJson(socialList)).toMatchSnapshot()
})

it('renders SocialList without throwing', () => {
    expect(() => mount(<SocialList />)).not.toThrow()
})
