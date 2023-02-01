import { createStore } from 'solid-js/store';

interface AppStore {
    name: string
}

export default createStore<AppStore>({
    name: ''
});