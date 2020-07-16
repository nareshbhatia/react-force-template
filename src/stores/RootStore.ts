import { createRouterState, RouterStore } from 'mobx-state-router';
import { PrefStore } from './PrefStore';
import { routes } from './routes';

const notFound = createRouterState('notFound');

export class RootStore {
    prefStore = new PrefStore(this);

    // Pass rootStore as an option to RouterStore
    routerStore = new RouterStore(routes, notFound, {
        rootStore: this,
    });
}
