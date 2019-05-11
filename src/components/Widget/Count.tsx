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
    lineHeight: '1em',
    marginLeft: '1.6vmin',
    ...(props: Props) => ({ color: props.theme.widget.header.count.color }),
};

const Count = ({ children }: Props): ReactElement => <div css={style}>{children}</div>;

export default withTheme(Count);
