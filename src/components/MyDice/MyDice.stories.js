import React from 'react';
import MyDice from './MyDice';
import { action } from '@storybook/addon-actions';

export default {
  title: 'MyDice',
  component: MyDice,
};

export const Text = () => <MyDice onClick={action('dis clicked My Text Button')}>Hello MyDice</MyDice>;

export const Emoji = () => (
  <MyDice onClick={action('dis clicked.. but no emojis, so sad face')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </MyDice>
);