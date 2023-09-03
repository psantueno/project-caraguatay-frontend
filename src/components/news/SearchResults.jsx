import { Container } from "react-bootstrap";
import { NewsItem } from "./NewsItem";

export const SearchResults = ({ results }) => {


    return (
        <>
            <Container className="mt-4">
                <div className="alert alert-success">Se han encontrado <b>({results.length})</b> noticia(s):</div>
            </Container>

            {
                results.map((news, index) => (

                    <div key={index}>
                        <NewsItem
                            category={news.category}
                            date={news.date}
                            title={news.title}
                            mainText={news.mainText}
                            urls={news.urls}
                            urlArray={news.urlArray}
                            link={`/noticias/${news.id}`}
                        />
                    </div>
                ))
            }

        </>
    )
}


