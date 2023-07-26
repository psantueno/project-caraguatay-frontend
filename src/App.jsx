import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { AppRouter } from './routers/AppRouter'



export const App = () => {

  return (
    <div className="app">
      <Header />
      <Container className='container-pages'>
        
          <AppRouter />
        
      </Container>
      <Footer />
    </div>
  )
}


