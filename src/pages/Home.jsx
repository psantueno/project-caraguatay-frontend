import { BannerHome } from '../components/BannerHome/BannerHome';
import { Formalities } from '../components/home/Formalities';
import { MainNews } from '../components/home/main-news/MainNews';

export const Home = () => {
  return (
    <>
      <BannerHome />
      <section className='formalities-bg'>
        <Formalities />
      </section>
      <MainNews />

    </>
  )
}
