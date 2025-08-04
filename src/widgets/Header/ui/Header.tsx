import { selectQuizProgress } from '@/entities/quiz';
import { useAppSelector } from '@/shared/lib/store';
import { ProgressBar } from '@/shared/ui/ProgressBar';

import styles from './Header.module.scss';

export const Header = () => {
    const progress = useAppSelector(selectQuizProgress);

    return (
        <header className={styles.wrapper}>
            <ProgressBar progress={progress} />
        </header>
    );
};
