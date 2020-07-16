import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DarkIcon from '@material-ui/icons/Brightness2';
import LightIcon from '@material-ui/icons/Brightness2Outlined';
import { observer } from 'mobx-react';
import { useRootStore } from '../../contexts';

export const ToggleTheme = observer(() => {
    const rootStore = useRootStore();
    const { prefStore } = rootStore;
    const { paletteType } = prefStore;

    const handleToggleTheme = () => {
        prefStore.toggleTheme();
    };

    return (
        <IconButton
            color="inherit"
            onClick={handleToggleTheme}
            aria-label="Toggle theme"
        >
            {paletteType === 'light' ? <LightIcon /> : <DarkIcon />}
        </IconButton>
    );
});
