import React from 'react';
import MyToggle from './MyToggle';
import { action } from '@storybook/addon-actions';

export default {
  title: 'MyToggle',
  component: MyToggle,
};

export const Text = () => <MyToggle onClick={action('dis clicked My Text Button')}>Hello MyToggle</MyToggle>;

export const Emoji = () => (
  <MyToggle onClick={action('dis clicked.. but no emojis, so sad face')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </MyToggle>
);