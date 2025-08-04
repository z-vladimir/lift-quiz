import type { AppStore } from '@/app/providers/StoreProvider';

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
