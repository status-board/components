import React from 'react';
import { storiesOf } from '@storybook/react';

import {
    ActivityIcon,
    GitlabIcon,
    BarChartIcon,
    UsersIcon,
    GitBranchIcon,
    ClockIcon,
    LockIcon,
    UnlockIcon,
    StarIcon,
    TagIcon,
    GridIcon,
    InfoIcon,
    PackageIcon,
    SlidersIcon,
    FolderIcon,
    LoaderIcon,
    CalendarIcon,
    GitCommitIcon,
    PauseCircleIcon,
    FastForwardIcon,
    GithubIcon,
    SlashIcon,
    PlayCircleIcon,
    CodeIcon,
    HashIcon,
    PieChartIcon,
} from '../src/';

storiesOf('Icons', module)
    .add('ActivityIcon', () => <ActivityIcon/>)
    .add('GitlabIcon', () => <GitlabIcon/>)
    .add('BarChartIcon', () => <BarChartIcon/>)
    .add('UsersIcon', () => <UsersIcon/>)
    .add('GitBranchIcon', () => <GitBranchIcon/>)
    .add('ClockIcon', () => <ClockIcon/>)
    .add('LockIcon', () => <LockIcon/>)
    .add('UnlockIcon', () => <UnlockIcon/>)
    .add('StarIcon', () => <StarIcon/>)
    .add('TagIcon', () => <TagIcon/>)
    .add('GridIcon', () => <GridIcon/>)
    .add('InfoIcon', () => <InfoIcon/>)
    .add('PackageIcon', () => <PackageIcon/>)
    .add('SlidersIcon', () => <SlidersIcon/>)
    .add('FolderIcon', () => <FolderIcon/>)
    .add('LoaderIcon', () => <LoaderIcon/>)
    .add('CalendarIcon', () => <CalendarIcon/>)
    .add('GitCommitIcon', () => <GitCommitIcon/>)
    .add('PauseCircleIcon', () => <PauseCircleIcon/>)
    .add('FastForwardIcon', () => <FastForwardIcon/>)
    .add('GithubIcon', () => <GithubIcon/>)
    .add('SlashIcon', () => <SlashIcon/>)
    .add('PlayCircleIcon', () => <PlayCircleIcon/>)
    .add('CodeIcon', () => <CodeIcon/>)
    .add('HashIcon', () => <HashIcon/>)
    .add('PieChartIcon', () => <PieChartIcon/>);
