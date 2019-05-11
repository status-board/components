/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactElement, ReactNode } from 'react';
import { withTheme } from 'emotion-theming';
import { typography } from '@status-board/theme-manager';
import { Theme } from '@status-board/theme-manager/lib/types';

interface Props {
    children: ReactNode;
    theme: Theme;
}

const style = {
    position: 'relative' as 'relative',
    width: '100%',
    height: '100%',
    ...((props: Props) => ({
        background: props.theme.widget.background,
    })),
    ...(props: Props) => typography(props.theme, 'default', 'default'),
};

const Inner = ({ children }: Props): ReactElement => <div css={style}>{children}</div>;

export default withTheme(Inner);
