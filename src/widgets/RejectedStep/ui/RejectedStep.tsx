import { HandIcon } from '@/shared/assets/icons';
import { Title } from '@/shared/ui/Title';

import styles from './RejectedStep.module.scss';

export const RejectedStep = () => {
    return (
        <>
            <HandIcon width={80} height={80} className={styles.icon} />
            <Title title="Well then let’s try next time" />
        </>
    );
};
