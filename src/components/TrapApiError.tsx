import React, { Component, ReactNode } from 'react';

interface TrapApiErrorProps {
    error: {
        message: string;
    };
    children: React.ReactNode;
}

export default class TrapApiError extends Component<TrapApiErrorProps> {
    public render(): ReactNode {
        const { error, children } = this.props;

        if (error) {
            return <div>{error.message}</div>;
        }

        return children;
    }
}
