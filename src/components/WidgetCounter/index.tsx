import React from 'react';

import Container from './Container';
import Count from './Count';
import CountInner from './CountInner';
import CountText from './CountText';
import PostLabel from './PostLabel';
import PreLabel from './PreLabel';
import Unit from './Unit';

interface Props {
    align: string;
    count: number;
    preLabel?: string;
    postLabel?: string;
    unit?: number;
}

export default function WidgetCounter(
    {
        align = 'center',
        count, preLabel,
        postLabel,
        unit,
    }: Props,
) {
    return (
        <Container>
            {
                preLabel && <PreLabel align={align}> preLabel </PreLabel>
            }
            <Count align={align}>
                <CountInner>
                    <CountText>
                        {count}
                        {' '}
                    </CountText>
                    {unit && (
                        <Unit>
                            {unit}
                            {' '}
                        </Unit>
                    )}
                </CountInner>
            </Count>
            {
                postLabel && <PostLabel align={align}> postLabel </PostLabel>
            }
        </Container>
    );
}
