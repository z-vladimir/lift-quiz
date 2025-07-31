import { combineReducers } from '@reduxjs/toolkit';

import { quizReducer } from './features/quiz/quizSlice';

export const rootReducer = combineReducers({
    quiz: quizReducer,
});
