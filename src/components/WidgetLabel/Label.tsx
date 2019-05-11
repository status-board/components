/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSProperties, ReactElement, ReactNode } from 'react';
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
    flexGrow: 1,
    ...((props: Props) => ({
        padding: props.theme.label.main.padding,
        background: props.theme.label.main.background,
        color: props.theme.label.main.color,
    })),
};

const Label = ({ children }: Props): ReactElement => <span css={style}>{children}</span>;

export default withTheme(Label);
