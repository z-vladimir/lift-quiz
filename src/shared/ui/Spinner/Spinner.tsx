import { SpinnerIcon } from '@/shared/assets/icons';

import styles from './Spinner.module.scss';

export const Spinner = () => {
    return <SpinnerIcon width={24} height={24} className={styles.wrapper} />;
};
