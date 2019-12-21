import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import AlbumItem from './../AlbumItem'

const defaultArgs = {
  artist: 'test-artist',
  albumName: 'test-albumName',
  thumbnail: 'test-thumbnail',
  albumLink: 'test-albumLink',
  playcount: 'test-playcount',
}

// Render Tests

it('renders AlbumItem correctly', () => {
    const albumItem = shallow(
      <AlbumItem {...defaultArgs} />)
    expect(toJson(albumItem)).toMatchSnapshot()
})

it('throws when required parameters are omitted', () => {
    expect(() => mount(<AlbumItem />)).toThrow()
})

it('does not throw when required parameters are provided', () => {
    expect(() => mount(<AlbumItem {...defaultArgs}/>)).not.toThrow()
})
