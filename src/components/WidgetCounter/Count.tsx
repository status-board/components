/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactElement, ReactNode } from 'react';

interface Component {
    align: string;
    children: ReactNode;
}

const style = {
    alignItems: 'center',
    flex: 1,
    display: 'flex',
    ...(props: Component) => {
        if (props.align === 'center') {
            return { justifyContent: 'center' };
        }
        if (props.align === 'left') {
            return { justifyContent: 'flex-start' };
        }
        return { justifyContent: 'flex-end' };
    },
};

const Count = ({ children }: Component): ReactElement => <span css={style}>{children}</span>;

export default Count;
