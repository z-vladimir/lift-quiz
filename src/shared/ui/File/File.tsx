import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import classNames from 'classnames';

import { FileIcon } from '@/shared/assets/icons';

import { Spinner } from '../Spinner';

import styles from './File.module.scss';

export type FileProps = {
    name: string;
    types: string[];
    maxSize: number;
    selectFile: (file: File | null) => void;
    required?: boolean;
    isLoading?: boolean;
};

const getFileFormats = (types: string[]) => {
    if (types.length > 1) {
        return types.map((type) => type.toUpperCase()).join(' or ');
    }

    return types[0].toUpperCase();
};

export const File = ({
    name,
    types,
    maxSize = 5,
    selectFile,
    required = false,
    isLoading = false,
}: FileProps) => {
    const [error, setError] = useState(false);

    const getFileRequirements = () => {
        return `${getFileFormats(types)}, ${maxSize}mb max`;
    };

    const onFileError = () => {
        setError(true);
        selectFile(null);
    };

    const onFileChange = (file: File | File[]) => {
        setError(false);

        if (!Array.isArray(file)) {
            selectFile(file);
        }
    };

    return (
        <div className={classNames(styles.wrapper)}>
            <FileUploader
                name={name}
                types={types}
                handleChange={onFileChange}
                onSizeError={onFileError}
                onTypeError={onFileError}
                maxSize={maxSize}
                hoverTitle="Add your image"
                required={required}
                multiple={false}
                classes={styles.uploader}
            >
                <div
                    className={classNames(styles.content, {
                        [styles.error]: error,
                        [styles.active]: isLoading,
                    })}
                >
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <FileIcon width={24} height={24} />
                    )}

                    <h2 className={styles.title}>
                        Upload an image or drag and drop here
                    </h2>

                    {error && (
                        <p className={styles.errorMessage}>
                            Error, please try again
                        </p>
                    )}
                </div>
            </FileUploader>

            <p className={styles.formats}>{getFileRequirements()}</p>
        </div>
    );
};
