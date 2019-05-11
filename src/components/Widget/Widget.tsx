import React, { CSSProperties } from 'react';

import Container from './Container';
import Inner from './Inner';

interface Props {
    children: React.ReactNode;
    style: CSSProperties;
}

const Widget = (props: Props) => {
    const { children, style } = props;

    return (
        <Container style={style}>
            <Inner>{children}</Inner>
        </Container>
    );
};

Widget.defaultProps = {
    style: {},
};

export default Widget;
