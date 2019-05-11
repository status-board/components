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
    ...((props: Props) => ({
        fontSize: props.theme.widget.header.icon.fontSize,
    })),
};

const IconWrapper = ({ children }: Props): ReactElement => <div css={style}>{children}</div>;

export default withTheme(IconWrapper);
