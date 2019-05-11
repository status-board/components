import React, { CSSProperties, Fragment } from 'react';
import { withTheme } from 'emotion-theming';
import isFunction from 'lodash/isFunction';
import { Theme } from '@status-board/theme-manager/lib/types';

import Count from './Count';
import Header from './Header';
import IconWrapper from './IconWrapper';
import Subject from './Subject';

interface Props {
    title: React.ReactNode;
    subject?: string;
    subjectPlacement?: string;
    count?: number;
    icon: React.ReactNode;
    iconStyle?: CSSProperties;
    style?: CSSProperties;
    theme: Theme;
}

function WidgetHeader(props: Props) {
    const {
        title, subject, subjectPlacement, count, icon: _icon, style, theme,
    } = props;

    let subjectNode = null;
    if (subject) {
        subjectNode = (
            <Subject>
                {subject}
                {' '}
            </Subject>
        );
    }

    let countNode = null;
    if (count !== undefined) {
        countNode = (
            <Count>
                {count}
                {' '}
            </Count>
        );
    }

    let icon = null;
    if (_icon !== undefined) {
        if (isFunction(_icon)) {
            icon = (
                <IconWrapper>
                    {
                        _icon({
                            size: theme.widget.header.icon.fontSize,
                            color: theme.colors.icon,
                        })
                    }
                </IconWrapper>
            );
        } else {
            icon = (
                <IconWrapper>
                    {_icon}
                    {' '}
                </IconWrapper>
            );
        }
    }

    return (
        <Header style={style}>
            <span>
                {subjectPlacement === 'prepend' && subjectNode}
                {title}
                {subjectPlacement === 'append' && (
                    <Fragment>
                        {subjectNode}
                        {' '}
                    </Fragment>
                )}
                {countNode}
            </span>
            {icon}
        </Header>
    );
}

WidgetHeader.defaultProps = {
    subjectPlacement: 'prepend',
    style: {},
    iconStyle: {},
};

export default withTheme(WidgetHeader);
