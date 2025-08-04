import { selectQuizFile } from '@/entities/quiz';
import { FireworksIcon } from '@/shared/assets/icons';
import { useAppSelector } from '@/shared/lib/store';
import { Title } from '@/shared/ui/Title';

import styles from './SuccessStep.module.scss';

export const SuccessStep = () => {
    const file = useAppSelector(selectQuizFile);

    if (!file) return null;

    return (
        <>
            <FireworksIcon width={80} height={80} className={styles.icon} />
            <Title title="Image uploaded successfully" />
            <img src={file} className={styles.image} alt="" />
        </>
    );
};
