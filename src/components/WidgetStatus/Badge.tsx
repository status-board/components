/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSProperties, ReactElement, ReactNode } from 'react';

interface Component {
    children: ReactNode;
    style: CSSProperties;
}

const style = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    ...(props: Component) => props.style,
};

const Badge = ({ children }: Component): ReactElement => <div css={style}>{children}</div>;

export default Badge;
