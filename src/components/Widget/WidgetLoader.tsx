import React from 'react';
import BallBeat from 'react-pure-loaders/build/BallBeat';
import SpinnerContainer from './SpinnerContainer';

interface WidgetLoaderProps {
    color: string;
}

const WidgetLoader = ({ color }: WidgetLoaderProps) => (
    <SpinnerContainer><BallBeat color={color} loading /></SpinnerContainer>
);

export default WidgetLoader;
