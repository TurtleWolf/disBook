import React from 'react';
import MyDisDatDice from './MyTicTacDice';
import { action } from '@storybook/addon-actions';

export default {
  title: 'MyDisDatDice',
  component: MyDisDatDice,
};

export const Text = () => <MyDisDatDice onClick={action('dis clicked My Text Button')}>Hello MyDisDatDice</MyDisDatDice>;

export const Emoji = () => (
  <MyDisDatDice onClick={action('dis clicked.. but no emojis, so sad face')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </MyDisDatDice>
);