import { BannerHome } from '../components/BannerHome/BannerHome';
import { NewsItem } from '../components/news/NewsItem';
import { Formalities } from '../components/Formalities'; 

export const Home = () => {
  return (
    <>
        <BannerHome />
        <Formalities />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
    </>
  )
}
