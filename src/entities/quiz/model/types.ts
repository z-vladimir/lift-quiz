export interface Question {
    id: string;
    question: string;
    answers: Answer[];
    request?: QuestionRequest;
}

export interface Answer {
    id: string;
    label: string;
    status?: AnswerStatus;
}

export type QuestionRequest = 'location';

export type AnswerStatus = 'pending' | 'success' | 'rejected' | 'file';

export interface UserLocation {
    country: string;
}
