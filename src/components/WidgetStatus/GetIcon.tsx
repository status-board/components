import React from 'react';
import find from 'lodash/find';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCross, faSign, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { IconProps } from '../Icons';

const iconMapping = [
    {
        icon: faCheck,
        match: ['success', 'passed', 'good', 'ok'],
    },
    {
        icon: faSign,
        match: ['warning'],
    },
    {
        icon: faCross,
        match: ['error', 'failed', 'bad', 'ko'],
    },
];

interface Props extends IconProps {
    status: string;
}

export default function GetIcon({ status, ...rest }: Props) {
    const matchedMapping = find(
        iconMapping,
        (mapping): boolean => mapping.match.includes(status),
    );
    if (matchedMapping) {
        return <FontAwesomeIcon icon={matchedMapping.icon} {...rest} />;
    }
    return <FontAwesomeIcon icon={faHandsHelping} {...rest} />;
}
