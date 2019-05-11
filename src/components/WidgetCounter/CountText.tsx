/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSProperties, ReactElement, ReactNode } from 'react';
import { typography } from '@status-board/theme-manager';
import { Theme } from '@status-board/theme-manager/lib/types';
import { withTheme } from 'emotion-theming';

interface Component {
    children: ReactNode;
    theme: Theme;
}

const style = {
    fontSize: ' 9vmin',
    ...(props: Component) => ({ color: props.theme.colors.textHighlight }),
    ...(props: Component) => typography(props.theme, 'display'),
};

const CountText = ({ children }: Component): ReactElement => <span css={style}>{children}</span>;

export default withTheme(CountText);
