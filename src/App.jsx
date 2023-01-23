import './App.css'
import { Routes, Route } from 'react-router-dom';  
import { Home } from './Home';
import Formulario  from './Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewsDetail } from './components/news/NewsDetail';


export const App = () => {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
        <Route exact path="/formulario" element={<Formulario />} ></Route>
        <Route exact path="/noticias/1" element={<NewsDetail />} ></Route>
      </Routes>      
    </div>
  )
}


