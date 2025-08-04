import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { QuizFile, setFile } from '@/entities/quiz';
import { GlobalRoutes } from '@/shared/consts';
import { useAppDispatch } from '@/shared/lib/store';
import { convertToBase64 } from '@/shared/lib/utils';

export const SelectQuizFile = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const selectFile = async (file: File | null) => {
        if (!file) {
            dispatch(setFile(file));

            return;
        }

        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);

        const base64 = await convertToBase64(file);

        dispatch(setFile(base64));

        navigate(GlobalRoutes.SUCCESS, { replace: true });
    };

    return <QuizFile isLoading={isLoading} selectFile={selectFile} />;
};
