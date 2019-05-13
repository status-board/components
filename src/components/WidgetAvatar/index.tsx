import React, { CSSProperties, ReactNode } from 'react';
import Avatar from './Avatar';

interface Props {
    children: React.ReactNode;
    size: number;
    style: CSSProperties;
}

export default function WidgetAvatar({ children, size = 36, style = {} }: Props): ReactNode {
    const avatarStyle = {
        fontSize: `calc(${size} / 2)`,
        height: size,
        width: size,
        ...style,
    };

    return (
        <Avatar style={avatarStyle}>
            {children}
        </Avatar>
    );
}
