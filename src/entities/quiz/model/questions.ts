import { generateId } from '@/shared/lib/utils';

import type { Question } from './types';

export const quizQuestions: Question[] = [
    {
        id: generateId(),
        question: 'Are you from',
        request: 'location',
        answers: [
            {
                id: generateId(),
                label: 'Yes, I’m from',
                status: 'pending',
            },
            {
                id: generateId(),
                label: 'No, I’m from another country',
                status: 'pending',
            },
        ],
    },
    {
        id: generateId(),
        question: 'Ready to create your first photo album?',
        answers: [
            {
                id: generateId(),
                label: 'Yes, let’s begin',
                status: 'file',
            },
            {
                id: generateId(),
                label: 'No, not interested yet',
                status: 'rejected',
            },
        ],
    },
];
