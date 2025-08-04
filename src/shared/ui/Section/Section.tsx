import type { ReactNode } from 'react';

import styles from './Section.module.scss';

interface SectionProps {
    children: ReactNode;
}

export const Section = ({ children }: SectionProps) => {
    return <section className={styles.wrapper}>{children}</section>;
};
