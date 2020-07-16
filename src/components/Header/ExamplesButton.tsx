import React from 'react';
import Button from '@material-ui/core/Button';
import { useRouterStore } from 'mobx-state-router';

export const ExamplesButton = () => {
    const routerStore = useRouterStore();

    const handleClick = () => {
        routerStore.goTo('examples', {
            params: {
                navItemId: 'master-detail',
            },
        });
    };

    return (
        <Button color="inherit" onClick={handleClick} aria-label="Examples">
            Examples
        </Button>
    );
};
