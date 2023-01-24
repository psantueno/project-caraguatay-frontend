import { Routes, Route } from 'react-router-dom';  
import { Header } from './components/Header';
import { Footer } from './Footer';
import { Home } from './Home';
import { AppRouter } from './routes/AppRouter'


export const App = () => {

  return (
    <div>
      <Header/>
        <AppRouter/>     
      <Footer/>
    </div>
  )
}


