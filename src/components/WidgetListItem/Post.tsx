import React, { ReactElement, ReactNode } from 'react';

interface Component {
    children: ReactNode;
}

const style = {
    marginLeft: '2vmin',
};

const Post = ({ children }: Component): ReactElement => <div style={style}>{children}</div>;

export default Post;
