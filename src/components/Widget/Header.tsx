/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSProperties, ReactElement, ReactNode } from 'react';
import { withTheme } from 'emotion-theming';
import { typography } from '@status-board/theme-manager';
import { Theme } from '@status-board/theme-manager/lib/types';

interface Props {
    children: ReactNode;
    style?: CSSProperties;
    theme: Theme;
}

const css = {
    position: 'relative' as 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    whiteSpace: 'pre' as 'pre',
    ...(props: Props) => ({
        height: props.theme.widget.header.height,
        padding: props.theme.widget.header.padding,
        background: props.theme.widget.header.background,
    }),
    ...(props: Props) => typography(props.theme, 'display'),
};

const Header = ({ children, style }: Props): ReactElement => <header css={css} style={style}>{children}</header>;

export default withTheme(Header);
