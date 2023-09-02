import { Container } from "react-bootstrap";
import { NewsItem } from "./NewsItem";

export const SearchResults = ({ results }) => {


    return (
        <>
            <Container className="mt-4">
                {/* <h3  className="mt-3 mb-1 search-results" > Se han encontrado <b>({results.length})</b> noticias:</h3> */}
                <div className="alert alert-success">Se han encontrado <b>({results.length})</b> noticia(s):</div>
            </Container>

            {
                results.map((news, index) => (

                    <div key={index}>
                        <NewsItem
                            category={news.category}
                            date={news.date}
                            title={news.title}
                            text={news.mainText}
                        />
                    </div>
                ))
            }

        </>
    )
}


