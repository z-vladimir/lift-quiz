import { combineReducers } from '@reduxjs/toolkit';

import { quizReducer } from '@/entities/quiz';

export const rootReducer = combineReducers({
    quiz: quizReducer,
});
