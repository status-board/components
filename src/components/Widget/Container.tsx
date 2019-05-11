/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSProperties, ReactElement, ReactNode } from 'react';
import { withTheme } from 'emotion-theming';
import { Theme } from '@status-board/theme-manager/lib/types';

interface Props {
    children: ReactNode;
    style: CSSProperties;
    theme: Theme;
}

const css = {
    position: 'relative' as 'relative',
    width: '100%',
    height: '100%',
    ...((props: Props) => ({
        padding: props.theme.widget.wrapper.padding,
    })),
};

const Container = ({ children, style }: Props): ReactElement => <div css={css} style={style}>{children}</div>;

export default withTheme(Container);
