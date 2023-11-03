import { Route, Routes } from 'react-router-dom';
import { UserAdmin } from '../../pages';


export const SuperAdminRoutes = () => {

    return (
        <>
            <Routes>
                <Route exact path="/usuarios" element={<UserAdmin />} ></Route>
            </Routes>

        </>
    )
}
