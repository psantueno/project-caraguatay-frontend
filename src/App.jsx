import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { AppRouter } from './routers/AppRouter'
import { AuthProvider } from './components/auth/context/AuthProvider';



export const App = () => {

  return (
    <div className="app">
      <AuthProvider>
        <Header />
        <Container className='container-pages'>

          <AppRouter />

        </Container>
        <Footer />
      </AuthProvider>
    </div>
  )
}


