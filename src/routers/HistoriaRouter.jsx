import { Navigate, Route, Routes } from 'react-router';
import { Flag, Origin, References, Shield } from '../components/history';

export const HistoriaRouter = () => {

    return (

        <Routes>
            <Route path="escudo" element={<Shield />} />
            <Route path="bandera" element={<Flag />} />
            <Route path="referencias" element={<References />} />
            <Route path="origen" element={<Origin />} />
            /* Ruta a la que dirige por defecto cuando clickeamos en HISTORIA */
            <Route path="/" element={<Navigate to="/historia/escudo" />} />
        </Routes>
    )
}