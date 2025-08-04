import { AnimationWrapper } from '@/shared/ui/AnimationWrapper';
import { Section } from '@/shared/ui/Section';
import { RejectedStep } from '@/widgets/RejectedStep';

export const RejectedPage = () => {
    return (
        <AnimationWrapper>
            <Section>
                <RejectedStep />
            </Section>
        </AnimationWrapper>
    );
};
