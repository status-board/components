import React from 'react';
import SpinnerContainer from './SpinnerContainer';
import BallBeat from 'react-pure-loaders/build/BallBeat';

interface WidgetLoaderProps {
    color: string;
}

const WidgetLoader = ({ color }: WidgetLoaderProps) => (
    <SpinnerContainer><BallBeat color={color} loading/></SpinnerContainer>
);

export default WidgetLoader;
