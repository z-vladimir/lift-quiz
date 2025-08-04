import { File } from '@/shared/ui/File';
import { Title } from '@/shared/ui/Title';

interface QuizFileProps {
    isLoading: boolean;
    selectFile: (file: File | null) => void;
}

export const QuizFile = ({ isLoading, selectFile }: QuizFileProps) => {
    return (
        <>
            <Title title="Upload an Image" />

            <File
                name="file"
                maxSize={10}
                types={['jpg', 'png']}
                selectFile={selectFile}
                isLoading={isLoading}
            />
        </>
    );
};
