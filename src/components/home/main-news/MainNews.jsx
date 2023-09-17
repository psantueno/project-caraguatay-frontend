
import { Container } from 'react-bootstrap';
import { NewsItemContainer } from '../../news/NewsItemContainer';
import { useFetchNews } from '../../../hooks/useFetchNews';

export const MainNews = () => {

    return (
        <>
            <Container className='containers-home'>
               
                <NewsItemContainer 
                    ft={useFetchNews} 
                    route={'noticias'}
                    />

            </Container>

        </>
    )
}
