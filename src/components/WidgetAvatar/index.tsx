import React, { CSSProperties, ReactNode } from 'react';
import Avatar from './Avatar';

interface Props {
    children: React.ReactNode;
    size: number;
    style: CSSProperties;
}

export default function WidgetAvatar(props: Props): ReactNode {
    const { children, size, style: _style } = props;

    const style = {
        fontSize: `calc(${size} / 2)`,
        height: size,
        width: size,
        ..._style,
    };

    return (
        <Avatar style={style}>
            {children}
        </Avatar>
    );
}

WidgetAvatar.defaultProps = {
    size: 36,
    style: {},
};
