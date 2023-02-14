import { Header } from './components/header/Header';
import { Footer } from './Footer';
import { AppRouter } from './router/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';


export const App = () => {

  return (
    <div>
      <Header/>
        <AppRouter/>     
      <Footer/>
    </div>
  )
}


