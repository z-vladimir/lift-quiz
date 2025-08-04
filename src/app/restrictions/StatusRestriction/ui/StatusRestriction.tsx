import { type ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { type AnswerStatus, selectQuizStatus } from '@/entities/quiz';
import { GlobalRoutes } from '@/shared/consts';
import { useAppSelector } from '@/shared/lib/store';

interface StatusRestrictionProps {
    status: AnswerStatus;
    children: ReactNode;
}

export const StatusRestriction = ({
    status,
    children,
}: StatusRestrictionProps) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const currentStatus = useAppSelector(selectQuizStatus);

    useEffect(() => {
        if (currentStatus === 'pending' && pathname !== GlobalRoutes.HOME) {
            return navigate(GlobalRoutes.HOME, { replace: true });
        }

        if (currentStatus === 'file' && pathname !== GlobalRoutes.FILE) {
            return navigate(GlobalRoutes.FILE, { replace: true });
        }

        if (
            currentStatus === 'rejected' &&
            pathname !== GlobalRoutes.REJECTED
        ) {
            return navigate(GlobalRoutes.REJECTED, { replace: true });
        }

        if (currentStatus === 'success' && pathname !== GlobalRoutes.SUCCESS) {
            return navigate(GlobalRoutes.SUCCESS, { replace: true });
        }
    }, [currentStatus, pathname, navigate]);

    if (currentStatus !== status) return null;

    return children;
};
