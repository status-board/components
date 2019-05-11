import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { Theme } from '@status-board/theme-manager/lib/types';
import getColorKey from './get-color-key';

const Ship = styled.span`
    display: block;
    border-radius: 50%;
`;


interface Props {
    status: string;
    size: string | number;
    theme: Theme;
    style: CSSProperties;
}

function WidgetStatusChip(props: Props) {
    const {
        status, size, theme, style: _style,
    } = props;

    const colorKey = getColorKey(status);

    const style = {
        height: size,
        width: size,
        background: theme.colors[colorKey],
        ..._style,
    };

    return <Ship style={style} />;
}

WidgetStatusChip.defaultProps = {
    size: 12,
};

export default withTheme(WidgetStatusChip);
