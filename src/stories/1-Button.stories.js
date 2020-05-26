import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withCssResources } from '@storybook/addon-cssresources';
import imageUrl from '../shared/images/logo.svg';

export default {
  title: 'Button',
  component: Button,
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

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
