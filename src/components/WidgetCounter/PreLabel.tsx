/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSProperties, ReactElement, ReactNode } from 'react';
import { typography } from '@status-board/theme-manager';
import { Theme } from '@status-board/theme-manager/lib/types';
import { withTheme } from 'emotion-theming';

interface Component {
    align: string;
    children: ReactNode;
    theme: Theme;
}

const style = {
    marginBottom: '2vmin',
    ...(props: Component) => {
        if (props.align === 'center') {
            return { textAlign: 'center' };
        }
        if (props.align === 'left') {
            return { textAlign: 'left' };
        }
        return { textAlign: 'right' };
    },
    ...(props: Component) => typography(props.theme),
};

const PostLabel = ({ children }: Component): ReactElement => <div css={style}>{children}</div>;

export default withTheme(PostLabel);
