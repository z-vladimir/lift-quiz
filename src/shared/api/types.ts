interface ApiSuccess<T> {
    success: true;
    data: T;
}

interface ApiFailure {
    success: false;
    error: ApiError;
}

interface ApiError {
    message: string;
    code?: string;
    status?: number;
}

export type ApiResult<T> = ApiSuccess<T> | ApiFailure;
