import { selectQuizCurrentQuestion } from '@/entities/quiz';
import { SelectQuizAnswer } from '@/features/quiz';
import { useAppSelector } from '@/shared/lib/store';
import { AnimationWrapper } from '@/shared/ui/AnimationWrapper';
import { Section } from '@/shared/ui/Section';

export const HomePage = () => {
    const question = useAppSelector(selectQuizCurrentQuestion);

    return (
        <AnimationWrapper key={question?.id}>
            <Section>
                <SelectQuizAnswer />
            </Section>
        </AnimationWrapper>
    );
};
