import { RouterProvider as ReactRouterProvider } from 'react-router-dom';

import { router } from '../config/router';

export const RouterProvider = () => {
    return (
        <ReactRouterProvider
            router={router}
            future={{
                v7_startTransition: true,
            }}
        />
    );
};
