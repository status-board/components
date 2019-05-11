import React, { ReactElement, ReactNode } from 'react';

interface Component {
    children: ReactNode;
}

const style = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const IconWrapper = ({ children }: Component): ReactElement => <div style={style}>{children}</div>;

export default IconWrapper;
