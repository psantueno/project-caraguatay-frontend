import { Navigate, Route, Routes } from 'react-router';
import { DPNews, RoboticSchool, Training, Workshop} from '../components/digitalPoint';
import { NewsDetail } from '../components/news/NewsDetail';

export const DigitalPointRouter = () => {

    return (

        <Routes>
            <Route path="novedades" element={<DPNews />} />
            <Route path="capacitaciones" element={<Training />} />
            <Route path="escuela-robotica" element={<RoboticSchool />} />
            <Route path="talleres" element={<Workshop />} />
            <Route path="/:id" element={<NewsDetail />} />
            /* Ruta a la que dirige por defecto cuando clickeamos en PUNTO DIGITAL */
            <Route path="/" element={<Navigate to="/punto-digital/novedades" />} />
        </Routes>
    )
}