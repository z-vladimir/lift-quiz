import { useNavigate } from 'react-router-dom';

import { type Answer, QuizAnswers, setAnswer } from '@/entities/quiz';
import { GlobalRoutes } from '@/shared/consts';
import { useAppDispatch } from '@/shared/lib/store';

export const SelectQuizAnswer = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const selectAnswer = (answer: Answer) => {
        dispatch(setAnswer(answer));

        switch (answer.status) {
            case 'file':
                navigate(GlobalRoutes.FILE);
                break;
            case 'rejected':
                navigate(GlobalRoutes.REJECTED);
                break;
            default:
                break;
        }
    };

    return <QuizAnswers selectAnswer={selectAnswer} />;
};
