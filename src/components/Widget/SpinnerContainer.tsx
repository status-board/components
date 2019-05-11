import React, { ReactElement, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const style = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column' as 'column',
    textAlign: 'center' as 'center',
    overflow: 'hidden',
};

const SpinnerContainer = ({ children }: Props): ReactElement => <div style={style}>{children}</div>;

export default SpinnerContainer;
