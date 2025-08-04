import { SelectQuizFile } from '@/features/quiz';
import { AnimationWrapper } from '@/shared/ui/AnimationWrapper';
import { Section } from '@/shared/ui/Section';

export const FilePage = () => {
    return (
        <AnimationWrapper>
            <Section>
                <SelectQuizFile />
            </Section>
        </AnimationWrapper>
    );
};
