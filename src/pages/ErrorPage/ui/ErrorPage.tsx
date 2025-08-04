import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { Container } from '@/shared/ui/Container';
import { Section } from '@/shared/ui/Section';
import { Title } from '@/shared/ui/Title';

export const ErrorPage = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <Container>
                <Section>
                    <Title title="Oops" />
                    <p>Sorry, an unexpected error has occurred.</p>
                    <h2>{error.status}</h2>
                    <p>{error.statusText}</p>
                    {error.data?.message && <p>{error.data.message}</p>}
                </Section>
            </Container>
        );
    } else {
        return (
            <Container>
                <Section>
                    <Title title="Oops" />
                    <p>Sorry, an unexpected error has occurred.</p>
                </Section>
            </Container>
        );
    }
};
