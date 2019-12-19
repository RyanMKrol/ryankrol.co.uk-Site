import React from 'react'
import { linkTo } from '@storybook/addon-links'
import SocialList from './../components/SocialList'

export default {
  title: 'SocialList',
};

export const normal = () => (
  <div style={{display: "flex"}}>
    <SocialList />
  </div>
)
