import { Container } from 'react-bootstrap';
import { ButtonSquareList } from '../components/buttonsSquare/ButtonSquareList';
import { CultureBtns } from '../assets/data/CultureBtns';
import { CulturaTurismoRouter } from '../routers/CulturaTurismoRouter';
import { NewsItemContainer } from '../components/news/NewsItemContainer';
import { useFetchNewsByCategory } from '../hooks/useFetchNewsByCategory';


export const CulturaTurismo = () => {

  return (

    <>
      <Container style={{maxWidth:'1200px'}}>

        <h1>Cultura y Turismo</h1>
        <hr />
        <ButtonSquareList buttons={CultureBtns} />
        <CulturaTurismoRouter />
       
        <NewsItemContainer 
            fetch={useFetchNewsByCategory} 
            id="3" 
            route={'noticias'}/>

      </Container>
    </>
  )
}
