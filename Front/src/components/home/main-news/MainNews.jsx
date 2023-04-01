import { NewsItem } from '../../news/NewsItem';
import { Container } from 'react-bootstrap';

export const MainNews = () => {

    return (
        <>
            <Container className='containers-home'>

                <h4>Noticias Principales</h4>
                <hr />

                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />

            </Container>

        </>
    )
}
