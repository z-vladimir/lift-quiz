import { getUserLocation } from '@/entities/quiz';

export const quizLoader = async () => {
    const response = await getUserLocation();

    if (response.success) {
        return response.data.country;
    } else {
        return null;
    }
};
