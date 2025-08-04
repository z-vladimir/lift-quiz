import {
    type AxiosInstance,
    type AxiosRequestConfig,
    isAxiosError,
} from 'axios';

import type { ApiResult } from './types';

export const createApiClient = (axiosInstance: AxiosInstance) => {
    return async function apiClient<T>(
        config: AxiosRequestConfig,
    ): Promise<ApiResult<T>> {
        try {
            const response = await axiosInstance.request<T>(config);
            return {
                success: true,
                data: response.data,
            };
        } catch (error) {
            console.error('[API CLIENT ERROR]', {
                url: config.url,
                method: config.method,
                message: (error as Error).message,
            });

            if (isAxiosError(error)) {
                return {
                    success: false,
                    error: {
                        status: error.response?.status,
                        message:
                            error.response?.data.message || 'Unexpected error',
                    },
                };
            } else if (error instanceof Error) {
                return {
                    success: false,
                    error,
                };
            }

            return {
                success: false,
                error: new Error('Unknown error'),
            };
        }
    };
};
