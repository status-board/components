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
    ...(props: Props) => ({ color: props.theme.colors.textHighlight }),
    ...(props: Props) => typography(props.theme, 'default', 'strong'),
};

const Title = ({ children }: Props): ReactElement => <div css={style}>{children}</div>;

export default withTheme(Title);
