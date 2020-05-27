import React from 'react';
import MyTicTacToe from './MyTicTacToe';
import { action } from '@storybook/addon-actions';

export default {
  title: 'MyTicTacToe',
  component: MyTicTacToe,
};

export const Text = () => <MyTicTacToe onClick={action('dis clicked My Text Button')}>Hello MyTicTacToe</MyTicTacToe>;

export const Emoji = () => (
  <MyTicTacToe onClick={action('dis clicked.. but no emojis, so sad face')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </MyTicTacToe>
);