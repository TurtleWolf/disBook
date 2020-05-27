import React from 'react';
import MyDisDatDoe from './MyTicTacToe';
import { action } from '@storybook/addon-actions';

export default {
  title: 'MyDisDatDoe',
  component: MyDisDatDoe,
};

export const Text = () => <MyDisDatDoe onClick={action('dis clicked My Text Button')}>Hello MyDisDatDoe</MyDisDatDoe>;

export const Emoji = () => (
  <MyDisDatDoe onClick={action('dis clicked.. but no emojis, so sad face')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </MyDisDatDoe>
);