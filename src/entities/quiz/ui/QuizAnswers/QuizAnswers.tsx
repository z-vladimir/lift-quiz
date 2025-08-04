import { useLoaderData } from 'react-router-dom';

import { type Answer } from '@/entities/quiz';
import { selectQuizCurrentQuestion } from '@/entities/quiz';
import { useAppSelector } from '@/shared/lib/store';
import { Radio } from '@/shared/ui/Radio';
import { Title } from '@/shared/ui/Title';

import styles from './QuizAnswers.module.scss';

interface QuizAnswersProps {
    selectAnswer: (answer: Answer) => void;
}

export const QuizAnswers = ({ selectAnswer }: QuizAnswersProps) => {
    const country = useLoaderData();
    const currentQuestion = useAppSelector(selectQuizCurrentQuestion);

    const getTitle = () => {
        if (currentQuestion.request === 'location') {
            return `${currentQuestion.question} ${country || '(Unable to get your location)'}`;
        }

        return currentQuestion.question;
    };

    if (!currentQuestion) {
        return null;
    }

    return (
        <>
            <Title title={getTitle()} />

            <form className={styles.answers}>
                {currentQuestion.answers.map((answer) => (
                    <Radio
                        key={answer.id}
                        name="question"
                        value={answer.id}
                        label={answer.label}
                        onChange={() => selectAnswer(answer)}
                    />
                ))}
            </form>
        </>
    );
};
