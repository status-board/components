/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSProperties, ReactElement, ReactNode } from 'react';
import { Theme } from '@status-board/theme-manager/lib/types';
import { withTheme } from 'emotion-theming';

interface Props {
    children: ReactNode;
    disablePadding?: boolean;
    isHeaderless?: boolean;
    style?: CSSProperties;
    theme: Theme;
}

const css = {
    position: 'absolute' as 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    overflowX: 'hidden' as 'hidden',
    overflowY: 'auto' as 'auto',
    ...(props: Props) => {
        if (props.isHeaderless) {
            return { top: 0 };
        }
        return { top: props.theme.widget.body.top };
    },
    ...(props: Props) => {
        if (props.disablePadding) {
            return {};
        }
        return { padding: props.theme.widget.body.padding };
    },
};

const Body = ({ children, style }: Props): ReactElement => (
    <div css={css} style={style}>{children}</div>
);

export default withTheme(Body);
