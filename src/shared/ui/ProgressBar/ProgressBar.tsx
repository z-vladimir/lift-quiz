import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
    progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.label}>{progress}%</span>
            <div className={styles.content}>
                <span
                    className={styles.progress}
                    style={{
                        width: `${progress}%`,
                    }}
                ></span>
            </div>
        </div>
    );
};
