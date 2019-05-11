import React, { CSSProperties } from 'react';
import { withTheme } from 'emotion-theming';
import { Theme } from '@status-board/theme-manager/lib/types';
import Addon from './Addon';
import Wrapper from './Wrapper';
import Label from './Label';

interface Props {
    label: string;
    prefix?: number;
    suffix: React.ReactNode;
    style: CSSProperties;
    theme: Theme;
}

const WidgetLabel = (props: Props) => {
    const {
        label, prefix, suffix, style,
    } = props;

    let prefixNode = null;
    if (prefix !== undefined) {
        prefixNode = <Addon>{prefix}</Addon>;
    }

    let suffixNode = null;
    if (suffix !== undefined) {
        suffixNode = <Addon>{suffix}</Addon>;
    }

    return (
        <Wrapper style={style}>
            {prefixNode}
            <Label>{label}</Label>
            {suffixNode}
        </Wrapper>
    );
};

WidgetLabel.defaultProps = {
    style: {},
};

export default withTheme(WidgetLabel);
