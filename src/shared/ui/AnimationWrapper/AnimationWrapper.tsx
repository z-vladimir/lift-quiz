import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import styles from './AnimationWrapper.module.scss';

interface AnimationWrapperProps {
    children: ReactNode;
}

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

export const AnimationWrapper = ({ children }: AnimationWrapperProps) => (
    <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
        className={styles.wrapper}
    >
        {children}
    </motion.div>
);
