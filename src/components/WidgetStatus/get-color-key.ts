const colorMapping: { [key: string]: string[] } = {
    success: ['success', 'passed', 'good', 'ok'],
    warning: ['warning'],
    failure: ['error', 'failed', 'bad', 'ko'],
};

export default (status: string): string => {
    let statusKey = 'unknown';

    Object.entries(colorMapping).forEach(
        ([key, value]): void => {
            if (value.includes(status)) statusKey = key;
        },
    );

    return statusKey;
};
