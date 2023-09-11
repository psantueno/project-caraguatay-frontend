
import { Container } from 'react-bootstrap';
import { NewsItemContainer } from '../../news/NewsItemContainer';
import { useRef } from 'react';

export const MainNews = () => {

    return (
        <>
            <Container className='containers-home'>
                {/* Muestra las ultimas noticias */}
                <NewsItemContainer />

            </Container>

        </>
    )
}
