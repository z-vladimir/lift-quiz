import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [],
};

const quizSlice = createSlice({
    name: '@@quiz',
    initialState,
    reducers: {},
});

export const quizActions = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
