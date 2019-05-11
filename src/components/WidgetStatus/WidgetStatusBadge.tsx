import React, { CSSProperties } from 'react';
import { withTheme } from 'emotion-theming';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import { Theme } from '@status-board/theme-manager/lib/types';
import { typography } from '@status-board/theme-manager';
import Badge from './Badge';
import IconWrapper from './IconWrapper';
import getColorKey from './get-color-key';
import GetIcon from './GetIcon';

interface WidgetStatusBadgeProps {
    status: string;
    message: string;
    meta: string;
    iconSize: SizeProp;
    style: CSSProperties;
    theme: Theme;
}

function WidgetStatusBadge(props: WidgetStatusBadgeProps) {
    const {
        status, message, meta, iconSize, style, theme,
    } = props;

    const colorKey = getColorKey(status);

    const rootStyle = {
        ...style,
    };

    let messageNode = null;
    if (message !== undefined) {
        const cssTypography = typography(theme);
        messageNode = <span style={cssTypography}>{message}</span>;
    }

    let metaNode = null;
    if (meta !== undefined) {
        const cssTypography = typography(theme, undefined, 'small');
        metaNode = <span style={cssTypography}>{meta}</span>;
    }

    return (
        <Badge style={rootStyle}>
            <IconWrapper>
                <GetIcon status={status} size={iconSize} color={theme.colors[colorKey]} />
            </IconWrapper>
            {messageNode}
            {metaNode}
        </Badge>
    );
}

WidgetStatusBadge.defaultProps = {
    iconSize: 'XL',
    style: {},
};

export default withTheme(WidgetStatusBadge);
