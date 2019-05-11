import React, { ReactElement, ReactNode } from 'react';

interface Component {
    children: ReactNode;
}

const style = {
    marginRight: '2vmin',
};

const Pre = ({ children }: Component): ReactElement => <div style={style}>{children}</div>;

export default Pre;
