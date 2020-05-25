import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MyButton from '../MyButton';

storiesOf('MyButton', module).add('clicks', () => (
  <MyButton onClick={action('disButton clicked')} />
)); 