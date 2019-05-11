/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSProperties, ReactElement, ReactNode } from 'react';
import { Theme as ThemeType } from '@status-board/theme-manager/lib/types';
import { withTheme } from 'emotion-theming';

interface Props {
    align: string;
    style: CSSProperties;
    onClick: () => void;
    children: ReactNode;
    theme: ThemeType;
}

const style = {
    position: 'relative' as 'relative',
    display: 'flex',
    ...(props: Props) => ({
        padding: props.theme.list.item.padding,
        background: props.theme.list.item.background,
    }),
    ...(props: Props) => {
        if (props.align === 'top') {
            return {
                alignItems: 'flex-start',
            };
        }
        if (props.align === 'center') {
            return {
                alignItems: 'center',
            };
        }
        return {
            alignItems: 'flex-end',
        };
    },
    ...(props: Props) => {
        const styles: { [key: string]: any } = {};
        const hover = `${props.theme.list.item.extend.trim()} &:hover`;
        styles[hover] = {
            background: props.theme.list.item.hover.background,
        };
        return styles;
    },
};

const Item = ({ children }: Props): ReactElement => <div css={style}>{children}</div>;

export default withTheme(Item);
