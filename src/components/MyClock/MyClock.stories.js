import React from 'react';
import MyClock from './MyClock';
import { action } from '@storybook/addon-actions';

export default {
  title: 'MyClock',
  component: MyClock,
};

export const Text = () => <MyClock onClick={action('dis clicked My Text Button')}>Hello MyClock</MyClock>;

export const Emoji = () => (
  <MyClock onClick={action('dis clicked.. but no emojis, so sad face')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </MyClock>
);