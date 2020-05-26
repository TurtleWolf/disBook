import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MyRangeInput from './MyRangeInput';

storiesOf('MyRangeInput', module).add('slides', () => (
    <MyRangeInput
        onChange={action('range input changed')}
        onRender={action('range input rendered')}
    />
)); 