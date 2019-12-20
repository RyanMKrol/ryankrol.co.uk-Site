import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import About from './../About'

// Render Tests

it('renders About only when rendered', () => {
    const about = shallow(<About />)
    expect(toJson(about)).toMatchSnapshot()
})

it('does not crash when rendered', () => {
    expect(() => mount(<About />)).not.toThrow()
})
