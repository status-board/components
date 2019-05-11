/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactElement, ReactNode } from 'react';
import { typography } from '@status-board/theme-manager';
import { Theme } from '@status-board/theme-manager/lib/types';
import { withTheme } from 'emotion-theming';

interface Props {
    children: ReactNode;
    theme: Theme;
}

const style = {
    display: 'inline-block',
    marginLeft: '1vmin',
    fontSize: '5vmin',
    ...((props: Props) => typography(props.theme, 'display')),
};

const Container = ({ children }: Props): ReactElement => <span css={style}>{children}</span>;

export default withTheme(Container);
