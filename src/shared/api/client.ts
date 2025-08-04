import { axiosInstance } from './axiosInstance';
import { createApiClient } from './createApiClient';

export const apiClient = createApiClient(axiosInstance);
