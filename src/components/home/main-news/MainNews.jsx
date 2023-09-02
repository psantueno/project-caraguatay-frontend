
import { Container } from 'react-bootstrap';
import { NewsItemContainer } from '../../news/NewsItemContainer';

export const MainNews = () => {

    return (
        <>
            <Container className='containers-home'>

                <h4>Últimas Noticias</h4>
                <hr />

                <NewsItemContainer/>

            </Container>

        </>
    )
}
