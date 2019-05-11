/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactElement, ReactNode } from 'react';
import { withTheme } from 'emotion-theming';
import { Theme } from '@status-board/theme-manager/lib/types';

interface Props {
    children: ReactNode;
    theme: Theme;
}

const style = {
    display: 'inline-block',
    marginLeft: '0.5em',
    ...(props: Props) => ({ color: props.theme.colors.textHighlight }),
    '&:first-child': {
        marginLeft: 0,
        marginRight: '0.5em',
    },
};

const Subject = ({ children }: Props): ReactElement => <div css={style}>{children}</div>;

export default withTheme(Subject);
