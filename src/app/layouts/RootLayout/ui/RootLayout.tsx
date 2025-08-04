import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Container } from '@/shared/ui/Container';
import { Header } from '@/widgets/Header';

import styles from './RootLayout.module.scss';

export const RootLayout = () => {
    const location = useLocation();

    return (
        <Container>
            <Header />
            <main className={styles.wrapper}>
                <AnimatePresence mode="wait">
                    <Outlet key={location.pathname} />
                </AnimatePresence>
            </main>
        </Container>
    );
};
