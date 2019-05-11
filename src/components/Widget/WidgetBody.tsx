import React, { CSSProperties } from 'react';

import Body from './Body';

interface Props {
    children: React.ReactNode;
    disablePadding?: boolean;
    isHeaderless?: boolean;
    style?: CSSProperties;
}

function WidgetBody(props: Props) {
    const { children, disablePadding, isHeaderless, style } = props;

    return (
        <Body
            disablePadding={disablePadding}
            isHeaderless={isHeaderless}
            style={style}
        >
            {children}
        </Body>
    );
}

WidgetBody.defaultProps = {
    disablePadding: false,
    isHeaderless: false,
    style: {},
};

export default WidgetBody;
