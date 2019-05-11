import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '@status-board/theme-manager';

import {
    TrapApiError,
    Text,
    ExternalLink,
} from '../src/';

storiesOf('Welcome', module)
    .add('TrapApiError', () => (
        <TrapApiError
            error={{ message: 'Error' }}
        >Hello</TrapApiError>
    ))
    .add('Text', () => (
        <ThemeProvider theme={defaultTheme}>
            <Text
                tag="h1"
                type="default"
                variant="default"
            >Hello</Text>
        </ThemeProvider>
    ))
    .add('ExternalLink', () => <ExternalLink>Hello</ExternalLink>);
