import { Navigate, Route, Routes } from 'react-router';
import { DPNews, RoboticSchool, Training, Workshop} from '../components/digitalPoint';
import { NewsDetail } from '../components/news/NewsDetail';
import { Capacitaciones, EscuelaRobotica, Talleres } from '../pages';
import { Novedades } from '../pages/Novedades';

export const DigitalPointRouter = () => {

    return (

        <Routes>
            <Route path="novedades" element={<Novedades />} />
            <Route path="capacitaciones" element={<Capacitaciones />} />
            <Route path="robotica" element={<EscuelaRobotica />} />
            <Route path="talleres" element={<Talleres />} />
            <Route path="/:id" element={<NewsDetail />} />
            /* Ruta a la que dirige por defecto cuando clickeamos en PUNTO DIGITAL */
            <Route path="/" element={<Navigate to="/punto-digital/novedades" />} />
        </Routes>
    )
}