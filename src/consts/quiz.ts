export const QuizSteps = {
    country: {
        question: 'Are you from',
        positiveAnswer: 'Yes, I’m from',
        negativeAnswer: 'No, I’m from another country',
    },
    album: {
        question: 'Ready to create your first photo album?',
        positiveAnswer: 'Yes, let’s begin',
        negativeAnswer: 'No, not interested yet',
    },
    image: {
        question: 'Upload an image or drag and drop here',
    },
    summary: {
        positiveAnswer: 'Image uploaded successfully',
        negativeAnswer: 'Well then let’s try next time',
    },
} as const;

export const ImageUploaderText = {
    format: 'PNG or JPG, 10mb max',
    error: 'Error, please try again',
} as const;
