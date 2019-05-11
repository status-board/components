/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSProperties, ReactElement, ReactNode } from 'react';
import { Theme } from '@status-board/theme-manager/lib/types';
import { withTheme } from 'emotion-theming';

interface Props {
    children: ReactNode;
    style: CSSProperties;
    theme: Theme;
}

const css = {
    display: 'inline-flex',
    alignItems: 'stretch',
    alignContent: 'stretch',
    ...((props: Props) => ({
        background: props.theme.label.background,
        color: props.theme.label.color,
    })),
};

const Wrapper = ({ children, style }: Props): ReactElement => (
    <span css={css} style={style}>{children}</span>
);

export default withTheme(Wrapper);
