import React from 'react';
import ReRollButton from './ReRollButton';
import imageUrl from '../../../../../shared/images/logo.svg';
import { action } from '@storybook/addon-actions';
import { withCssResources } from '@storybook/addon-cssresources';

export default {
  title: 'ReRollButton',
  component: ReRollButton,
  parameters: {
    assets: [
      imageUrl, // link to a file imported
      'https://via.placeholder.com/300/09f/fff.png', // link to an external image
      'https://www.example.com', // link to a webpage
      'https://www.example.com?id={id}', // link to a webpage with the current story's id in the url
    ],
    cssresources: [
      {
        id: `bluetheme`,
        code: `<style>body { background-color: lightblue; }</style>`,
        picked: false,
        hideCode: false, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
      },
    ],
    decorators: [withCssResources],
  },
};

export const Text = () => <ReRollButton onClick={action('disClicked')}>Hello ReRollButton</ReRollButton>;

export const Emoji = () => (
  <ReRollButton onClick={action('disClicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </ReRollButton>
);