import { createBrowserRouter, Navigate } from 'react-router-dom';

import { RootLayout } from '@/app/layouts/RootLayout';
import { StatusRestriction } from '@/app/restrictions/StatusRestriction';
import { ErrorPage } from '@/pages/ErrorPage';
import { FilePage } from '@/pages/FilePage';
import { HomePage } from '@/pages/HomePage';
import { RejectedPage } from '@/pages/RejectedPage';
import { SuccessPage } from '@/pages/SuccessPage';
import { GlobalRoutes } from '@/shared/consts';

import { quizLoader } from './loaders';

export const router = createBrowserRouter([
    {
        path: GlobalRoutes.HOME,
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: (
                    <StatusRestriction status="pending">
                        <HomePage />
                    </StatusRestriction>
                ),
                loader: quizLoader,
            },
            {
                path: GlobalRoutes.FILE,
                element: (
                    <StatusRestriction status="file">
                        <FilePage />
                    </StatusRestriction>
                ),
            },
            {
                path: GlobalRoutes.REJECTED,
                element: (
                    <StatusRestriction status="rejected">
                        <RejectedPage />
                    </StatusRestriction>
                ),
            },
            {
                path: GlobalRoutes.SUCCESS,
                element: (
                    <StatusRestriction status="success">
                        <SuccessPage />
                    </StatusRestriction>
                ),
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to={GlobalRoutes.HOME} />,
    },
]);
