import React from 'react';
import DiceTray from './DiceTray';
import dieIMG1 from './dice/dice_Side_Images/dice_1.jpg';
import dieIMG2 from './dice/dice_Side_Images/dice_2.jpg';
import dieIMG3 from './dice/dice_Side_Images/dice_3.jpg';
import dieIMG4 from './dice/dice_Side_Images/dice_4.jpg';
import dieIMG5 from './dice/dice_Side_Images/dice_5.jpg';
import dieIMG6 from './dice/dice_Side_Images/dice_6.jpg';
import { action } from '@storybook/addon-actions';
import { withCssResources } from '@storybook/addon-cssresources';

export default {
  title: 'DiceTray',
  component: DiceTray,

  parameters: {
    assets: [
      dieIMG1, // link to a file imported
      dieIMG2, // link to a file imported
      dieIMG3, // link to a file imported
      dieIMG4, // link to a file imported
      dieIMG5, // link to a file imported
      dieIMG6, // link to a file imported
      // 'https://www.example.com?id={id}', // link to a webpage with the current story's id in the url
    ],
    cssresources: [{
      id: `bluetheme`,
      code: `<style>body { background-color: lightblue; }</style>`,
      picked: false,
    },
    ],
  },
  decorators: [withCssResources],
};

export const Text = () => <DiceTray onClick={action('dis clicked My Text DiceTray')}>Hello DiceTray</DiceTray>;

export const Emoji = () => (
  <DiceTray onClick={action('dis clicked.. but no emojis, so sad face')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </DiceTray>
);