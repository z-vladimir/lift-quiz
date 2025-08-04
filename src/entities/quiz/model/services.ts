import { apiClient, ApiRoutes } from '@/shared/api';

import type { UserLocation } from './types';

export const getUserLocation = async () =>
    await apiClient<UserLocation>({
        url: ApiRoutes.LOCATION,
        method: 'get',
    });
