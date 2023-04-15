import {Router} from 'express';
import {methods as userController} from '../controllers/Controller.Usuarios'

const router = Router();
router.get('/list/all',userController.listAllUsers);
router.get('/list/:id',userController.listUser);
router.put('/put/:id',userController.updateUser);
router.delete('/delete/:id',userController.deleteUser);
router.post('/create',userController.createUsuario);
export default router;
