import { Routes, Route } from 'react-router-dom';  
import { Header } from './components/Header';
import { Footer } from './Footer';
import { Home } from './Home';
import { AppRouter } from './routes/AppRouter'
import Formulario  from './Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewsDetail } from './components/news/NewsDetail';


export const App = () => {

  return (
    <div>
      <Header/>
        <AppRouter/>     
      <Footer/>
    </div>
  )
}


