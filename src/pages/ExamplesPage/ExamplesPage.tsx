import React, { ReactNode } from 'react';
import MasterDetailIcon from '@material-ui/icons/List';
import { observer } from 'mobx-react';
import { useRouterStore } from 'mobx-state-router';
import {
    HorizontalContainer,
    NavComponent,
    SideBar,
    ViewVerticalContainer,
} from '@react-force/core';
import { Header, ProductEditor } from '../../components';

const navComponents: Array<NavComponent> = [
    {
        type: 'group',
        items: [
            {
                id: 'master-detail',
                title: 'Master-Detail',
                icon: <MasterDetailIcon fontSize="small" />,
            },
        ],
    },
];

const navItemMap: { [navItemId: string]: ReactNode } = {
    'master-detail': <ProductEditor />,
};

// Observe routerState
export const ExamplesPage = observer(() => {
    const routerStore = useRouterStore();

    const { navItemId } = routerStore.routerState.params;

    const handleNavItemSelected = (navItemId: string) => {
        routerStore.goTo('examples', { params: { navItemId } });
    };

    return (
        <ViewVerticalContainer>
            <Header />
            <HorizontalContainer minHeight={0}>
                <SideBar
                    components={navComponents}
                    selectedNavItemId={navItemId}
                    onNavItemSelected={handleNavItemSelected}
                />
                {navItemMap[navItemId]}
            </HorizontalContainer>
        </ViewVerticalContainer>
    );
});
