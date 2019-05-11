import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '@status-board/theme-manager';

import {
    Widget,
    WidgetHeader,
    WidgetBody,
    WidgetLoader,
    WidgetListItem,
    WidgetLabel,
    WidgetTable,
    WidgetTableCell,
    WidgetTableHeadCell,
    WidgetAvatar,
    WidgetStatusChip,
    WidgetStatusBadge,
    WidgetCounter,
    GitlabIcon,
} from '../src';

const props = {};

storiesOf('Widget', module)
    .add('Widget', () => (
        <ThemeProvider theme={defaultTheme}>
            <Widget style={{}}>Hello</Widget>
        </ThemeProvider>
    ))
    .add('WidgetHeader', () => (
        <ThemeProvider theme={defaultTheme}>
            <WidgetHeader
                title="Title"
                subject="Subject"
                subjectPlacement=""
                count={9}
                icon={<GitlabIcon/>}
                iconStyle={{}}
                style={{}}
            />
        </ThemeProvider>
    ))
    .add('WidgetBody', () => (
        <ThemeProvider theme={defaultTheme}>
            <WidgetBody
                disablePadding={false}
                isHeaderless={false}
                style={{}}
            >
                Hello
            </WidgetBody>
        </ThemeProvider>
    ))
    .add('WidgetLoader', () => (
        <ThemeProvider theme={defaultTheme}>
            <WidgetLoader
                color="#000000"
            />
        </ThemeProvider>
    ))
    .add('WidgetListItem', () => (
        <ThemeProvider theme={defaultTheme}>
            <WidgetListItem
                align="center"
                meta="Meta"
                onClick={() => console.log('Click')}
                post="Post"
                pre="Pre"
                style={{}}
                subjectPlacement="prepend"
                title="Title"
            />
        </ThemeProvider>
    ))
    .add('WidgetLabel', () => (
        <ThemeProvider theme={defaultTheme}>
            <WidgetLabel
                label="Label"
                prefix={9}
                suffix={<span>Hello World</span>}
                style={{}}
            />
        </ThemeProvider>
    ))
    .add('WidgetTable', () => (
        <ThemeProvider theme={defaultTheme}>
            <WidgetTable>Hello</WidgetTable>
        </ThemeProvider>
    ))
    .add('WidgetTableCell', () => (
        <ThemeProvider theme={defaultTheme}>
            <WidgetTableCell>Hello</WidgetTableCell>
        </ThemeProvider>
    ))
    .add('WidgetTableHeadCell', () => (
        <ThemeProvider theme={defaultTheme}>
            <WidgetTableHeadCell>Hello</WidgetTableHeadCell>
        </ThemeProvider>
    ))
    .add('WidgetAvatar', () => (
        <ThemeProvider theme={defaultTheme}>
            <WidgetAvatar size={36} style={{}}>Hello</WidgetAvatar>
        </ThemeProvider>
    ))
    .add('WidgetStatusChip', () => (
        <ThemeProvider theme={defaultTheme}>
            <WidgetStatusChip
                status="error"
                size={12}
                style={{}}
            />
        </ThemeProvider>
    ))
    .add('WidgetStatusBadge', () => (
        <ThemeProvider theme={defaultTheme}>
            <WidgetStatusBadge
                status="error"
                message="Message"
                meta="Meta"
                iconSize="5x"
                style={{}}
            />
        </ThemeProvider>
    ))
    .add('WidgetCounter', () => (
        <ThemeProvider theme={defaultTheme}>
            <WidgetCounter
                align="center"
                count={9}
                preLabel="Pre Label"
                postLabel="Post Label"
                theme={defaultTheme}
                unit={9}
            />
        </ThemeProvider>
    ));
