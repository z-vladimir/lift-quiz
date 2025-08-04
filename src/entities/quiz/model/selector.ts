import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/shared/lib/store';

export const selectQuiz = (state: RootState) => state.quiz;

export const selectQuizQuestions = createSelector(
    selectQuiz,
    (quiz) => quiz.questions,
);

export const selectQuizCurrentQuestion = createSelector(selectQuiz, (quiz) => {
    const order =
        quiz.answers.length < quiz.questions.length
            ? quiz.answers.length
            : quiz.questions.length - 1;

    return quiz.questions[order];
});

export const selectQuizStatus = createSelector(
    selectQuiz,
    (quiz) => quiz.status,
);

export const selectQuizFile = createSelector(selectQuiz, (quiz) => quiz.file);

export const selectQuizProgress = createSelector(selectQuiz, (quiz) => {
    let quizLength = quiz.questions.length + 1;

    if (quiz.file || quiz.status === 'rejected') {
        quizLength -= 1;
    }

    return Math.floor((quiz.answers.length / quizLength) * 100);
});
