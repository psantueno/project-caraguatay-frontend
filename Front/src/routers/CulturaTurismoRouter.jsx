import { Navigate, Route, Routes } from 'react-router';
import { Campings, PlacesToVisit, Entrepreneurship, Location } from '../components/culturaTurismo';

export const CulturaTurismoRouter = () => {

  return (

    <Routes>
      <Route path="ubicacion" element={<Location />} />
      <Route path="turismo" element={<PlacesToVisit />} />
      <Route path="emprendimientos" element={<Entrepreneurship />} />
      <Route path="camping" element={<Campings />} />
      /* Ruta a la que dirige por defecto cuando clickeamos en CULTURA Y TURISMO */
      <Route path="/" element={<Navigate to="/cultura-turismo/ubicacion" />} />
    </Routes>
    
  )
}

