import React from 'react';

interface Component {
    children: React.ReactNode;
}

const style = {
    width: '100%',
    height: '100%',
    overflowX: 'hidden' as 'hidden',
    overflowY: 'auto' as 'auto',
    display: 'flex',
    flexDirection: 'column' as 'column',
};

const Container = ({ children }: Component): React.ReactElement => (
    <span style={style}>{children}</span>
);

export default Container;
