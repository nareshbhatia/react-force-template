import React from 'react';
import { Header as BaseHeader, HeaderTitle } from '@react-force/core';
import { observer } from 'mobx-react';
import { BackButton } from './BackButton';
import { ExamplesButton } from './ExamplesButton';
import { ToggleTheme } from './ToggleTheme';
import { HomeButton } from './HomeButton';

export enum NavButtonEnum {
    None,
    Home,
    Back,
}

export interface HeaderProps {
    navButtonEnum?: NavButtonEnum;
    title?: string;
}

export const Header = observer(
    ({
        navButtonEnum = NavButtonEnum.Home,
        title = 'React Force Template',
    }: HeaderProps) => {
        return (
            <BaseHeader>
                {navButtonEnum === NavButtonEnum.Home && <HomeButton />}
                {navButtonEnum === NavButtonEnum.Back && <BackButton />}
                <HeaderTitle>{title}</HeaderTitle>
                <ExamplesButton />
                <ToggleTheme />
            </BaseHeader>
        );
    }
);
