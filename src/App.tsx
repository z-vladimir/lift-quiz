import StoreProvider from './providers/StoreProvider';

import styles from './App.module.scss';

function App() {
    return (
        <StoreProvider>
            <div className={styles.container}>
                <header className={styles.header}>Header</header>
                <main className={styles.main}>Main</main>
            </div>
        </StoreProvider>
    );
}

export default App;
