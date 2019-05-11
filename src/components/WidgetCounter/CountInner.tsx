import React, { ReactElement, ReactNode } from 'react';

interface Component {
    children: ReactNode;
}

const style = {
    whiteSpace: 'pre' as 'pre',
};

const CountInner = ({ children }: Component): ReactElement => <span style={style}>{children}</span>;

export default CountInner;
