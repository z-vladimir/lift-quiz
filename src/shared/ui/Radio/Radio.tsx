import type { InputHTMLAttributes } from 'react';

import styles from './Radio.module.scss';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Radio = ({ name, value, label, onChange }: RadioProps) => {
    return (
        <label className={styles.wrapper}>
            <input
                type="radio"
                name={name}
                value={value}
                className={styles.input}
                onChange={onChange}
            />
            <span className={styles.checkmark} />
            <span className={styles.label}>{label}</span>
        </label>
    );
};
