import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { quizQuestions } from './questions';
import type { Answer, AnswerStatus, Question } from './types';

export interface QuizState {
    questions: Question[];
    answers: Answer['id'][];
    status: AnswerStatus;
    file: string | null;
}

const initialState: QuizState = {
    questions: quizQuestions,
    answers: [],
    status: 'pending',
    file: null,
};

const quizSlice = createSlice({
    name: '@@quiz',
    initialState,
    reducers: {
        setQuizQuestions: (state, action: PayloadAction<Question[]>) => {
            state.questions = action.payload;
        },
        setAnswer: (state, action: PayloadAction<Answer>) => {
            if (state.answers.includes(action.payload.id)) return;

            state.answers.push(action.payload.id);

            if (action.payload.status) {
                state.status = action.payload.status;
            }
        },
        setFile: (state, action: PayloadAction<QuizState['file']>) => {
            state.file = action.payload;

            if (state.file) {
                state.status = 'success';
            }
        },
    },
});

export const { setQuizQuestions, setAnswer, setFile } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
