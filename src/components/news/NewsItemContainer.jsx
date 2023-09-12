import { useEffect } from "react";
import { NewsItem } from "./NewsItem";



//Se componetiza este newsItemContainer para reutilizarlo en otras secciones//

export const NewsItemContainer = ({ fetch, id, route }) => {
    // console.log(id, 'este es el id que se pasa al fetch de newsBycategory');

    const { news, loadingCat, errorCat } = id ? fetch(id) : fetch();

    // console.log(fetch(), 'fetchID');
    // console.log(news, 'comunicados');


    useEffect(() => {
       
       
    }, [fetch, id]);

    if (loadingCat) {
        return <div>Cargando...</div>;
    }
    
    if (errorCat) {
        return <div>Error: {errorCat.message}</div>;
    }


    return (
        <>
            {
                news.map((news, i) => (

                    <div key={`${news.id}-${i}`}>

                        <NewsItem
                            category={news.category}
                            date={news.date}
                            title={news.title}
                            mainText={news.mainText}
                            urls={news.urls}
                            urlArray={news.urlArray}
                            link={`/${route}/${news.id}`}


                        />

                    </div>

                ))
            }
        </>
    )
}







