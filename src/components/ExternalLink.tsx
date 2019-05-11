import React, { ReactNode } from 'react';

interface Props {
    children: React.ReactNode;
}

export default function ExternalLink(props: Props): ReactNode {
    const { children, ...rest } = props;

    return (
        <a target="_blank" rel="noopener noreferrer" {...rest}>
            {children}
        </a>
    );
}
