import React from 'react'
import { linkTo } from '@storybook/addon-links'
import SocialList from './../components/SocialList'

export default {
  title: 'SocialList',
};

export const toStorybook = () => (
  <div style={{display: "flex"}}>
    <SocialList />
  </div>
)

toStorybook.story = {
  name: 'Normal',
}
