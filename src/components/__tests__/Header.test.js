import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import Header from './../Header'

it('renders router only when rendered', () => {
    const header = shallow(<Header />)
    expect(toJson(header)).toMatchSnapshot()
})
