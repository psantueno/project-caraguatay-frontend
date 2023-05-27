import { Router } from "express";
import {methods as digitalPoint} from '../controllers/Controller.digital_points';
const router = Router();
router.get('list/all',digitalPoint.listAllDigitalPoint);
router.get('/list/:idDigitalPoint',digitalPoint.listDigitalPoint);
router.put('/update/:idDigitalPoint',digitalPoint.updateDigitalPoint);
router.delete('delete/:idDigitalPoint',digitalPoint.deleteDigitalPoint);
router.post('/create/',digitalPoint.createDigitalPoint);
export default router;