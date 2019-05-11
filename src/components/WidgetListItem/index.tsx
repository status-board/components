import React, { CSSProperties } from 'react';
import { typography } from '@status-board/theme-manager';
import { Theme } from '@status-board/theme-manager/lib/types';
import { withTheme } from 'emotion-theming';
import Item from './Item';
import Post from './Post';
import Pre from './Pre';
import Title from './Title';

interface Props {
    align: string;
    meta?: string;
    onClick: () => void;
    post?: string;
    pre?: string;
    style: CSSProperties;
    theme: Theme;
    title: string;
}

const WidgetListItem = (props: Props) => {
    const {
        align,
        meta,
        onClick,
        post,
        pre,
        style,
        theme,
        title,
    } = props;

    let metaNode = null;
    if (meta !== undefined) {
        const cssTypography = typography(theme, 'default', 'small');
        metaNode = <div style={cssTypography}>{meta}</div>;
    }

    let preNode = null;
    if (pre !== undefined) {
        preNode = <Pre>{pre}</Pre>;
    }

    let postNode = null;
    if (post !== undefined) {
        postNode = <Post>{post}</Post>;
    }

    return (
        <Item align={align} style={style} onClick={onClick}>
            {preNode}
            <div style={{ flexGrow: 1 }}>
                <Title>{title}</Title>
                {metaNode}
            </div>
            {postNode}
        </Item>
    );
};

WidgetListItem.defaultProps = {
    subjectPlacement: 'prepend',
    align: 'center',
};

export default withTheme(WidgetListItem);
