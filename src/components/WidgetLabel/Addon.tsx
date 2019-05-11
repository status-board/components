/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactElement, ReactNode } from 'react';
import { Theme } from '@status-board/theme-manager/lib/types';
import { withTheme } from 'emotion-theming';

interface Props {
    children: ReactNode;
    theme: Theme;
}

const style = {
    display: 'inline-flex',
    alignItems: 'center',
    whiteSpace: 'pre' as 'pre',
    ...((props: Props) => ({
        padding: props.theme.label.addon.padding,
        background: props.theme.label.addon.background,
        color: props.theme.label.addon.color,
    })),
};

const Addon = ({ children }: Props): ReactElement => <span css={style}>{children}</span>;

export default withTheme(Addon);
