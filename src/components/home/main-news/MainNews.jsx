
import { Container } from 'react-bootstrap';
import { NewsItemContainer } from '../../news/NewsItemContainer';
import { useFetchNews } from '../../../hooks/useFetchNews';

export const MainNews = () => {

    return (
        <>
            <Container className='containers-home'>

                <h4>Últimas Noticias</h4>
                <hr />

                <NewsItemContainer 
                    fetch={useFetchNews} 
                    route={'noticias'}/>

            </Container>

        </>
    )
}
