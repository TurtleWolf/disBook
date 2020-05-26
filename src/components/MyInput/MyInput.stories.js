import React from 'react';
import MyInput from '../MyInput/MyInput';
// import imageUrl from '../../shared/images/logo.svg';
import { action } from '@storybook/addon-actions';
// import { withCssResources } from '@storybook/addon-cssresources';

export default {
  title: 'MyInput',
  component: MyInput,
};

export const Text = () => <MyInput onClick={action('dis clicked My Text Button')}>Hello MyInput</MyInput>;

export const Emoji = () => (
  <MyInput onClick={action('dis clicked.. but no emojis, so sad face')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </MyInput>
);