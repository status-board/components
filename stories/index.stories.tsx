import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '@status-board/theme-manager';

import {
    TrapApiError,
    ExternalLink,
} from '../src';

storiesOf('Welcome', module)
    .add('TrapApiError', () => (
        <ThemeProvider theme={defaultTheme}>
            <TrapApiError error={{ message: 'Error' }}>Hello</TrapApiError>
        </ThemeProvider>
    ))
    .add('ExternalLink', () => (
        <ThemeProvider theme={defaultTheme}>
            <ExternalLink>Hello</ExternalLink>
        </ThemeProvider>
    ));
