import { useFetchNews } from "../../hooks/useFetchNews";
import { NewsItem } from "./NewsItem";


export const NewsItemContainer = () => {

    const { news } = useFetchNews();


    return (
        <>
            {
                news.map((news, i) => (

                    <div key={`${news.id}-${i}`}>

                        <NewsItem
                            // category = {news.newsCategory_id === categoryNews.id ? categoryNews.category : null}
                            category={news.category}
                            date={news.date}
                            title={news.title}
                            mainText={news.mainText}
                            urls= {news.urls}
                            urlArray={news.urlArray}
                            link= {`/noticias/${news.id}`}
                        
                        />

                    </div>

                ))
            }
        </>
    )
}



                              



