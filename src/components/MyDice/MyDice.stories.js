import React from 'react';
import MyDice from '../MyDice/MyDice';
import imageUrl from '../../shared/images/logo.svg';
import { action } from '@storybook/addon-actions';

export default {
  title: 'MyDice',
  component: MyDice,
  parameters: {
    assets: [
      imageUrl, // link to a file imported
      'https://via.placeholder.com/300/09f/fff.png', // link to an external image
      'https://www.example.com', // link to a webpage
      'https://www.example.com?id={id}', // link to a webpage with the current story's id in the url
    ],
  },
};

export const Text = () => <MyDice onClick={action('dis clicked My Text Dice')}>Hello MyDice</MyDice>;

export const Emoji = () => (
  <MyDice onClick={action('dis clicked.. but no emojis, so sad face')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </MyDice>
);