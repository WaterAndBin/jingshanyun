import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import useUserStore from './user';
import useTimeStore from './time';

const store = createPinia();
store.use(piniaPluginPersistedstate);

export { useUserStore, useTimeStore };
