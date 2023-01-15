import './App.css'
import { Routes, Route } from 'react-router-dom';  
import { Home } from './Home';


export const App = () => {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
      </Routes>      
    </div>
  )
}


