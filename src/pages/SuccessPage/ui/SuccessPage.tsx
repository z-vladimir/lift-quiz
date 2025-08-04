import { AnimationWrapper } from '@/shared/ui/AnimationWrapper';
import { Section } from '@/shared/ui/Section';
import { SuccessStep } from '@/widgets/SuccessStep';

export const SuccessPage = () => {
    return (
        <AnimationWrapper>
            <Section>
                <SuccessStep />
            </Section>
        </AnimationWrapper>
    );
};
