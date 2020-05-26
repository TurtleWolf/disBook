import React from 'react';
import { storiesOf } from '@storybook/react';
import MyComponent from './MyComponent';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';

storiesOf('MyComponent', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <MyComponent
            title={text('Title', 'Disposable Defaults')}
            content={text('Content', 'wow, that was easier than I was expecting')}
            titleStyle={object('Title Style', { fontWeight: 'normal' })}
            contentStyle={object('Content Style', {
                fontFamily: 'arial',
                fontSize: '1.2em'
            })}
        />
    )); 