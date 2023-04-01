import { Navigate, Route, Routes } from 'react-router';
import { DPNews, RoboticSchool, Trainning, Workshop} from '../components/digitalPoint';

export const DigitalPointRouter = () => {

    return (

        <Routes>
            <Route path="novedades" element={<DPNews />} />
            <Route path="talleres" element={<Trainning />} />
            <Route path="escuela-robotica" element={<RoboticSchool />} />
            <Route path="capacitaciones" element={<Workshop />} />
            /* Ruta a la que dirige por defecto cuando clickeamos en PUNTO DIGITAL */
            <Route path="/" element={<Navigate to="/punto-digital/novedades" />} />
        </Routes>
    )
}