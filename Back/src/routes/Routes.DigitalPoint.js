import { Router } from "express";
import {methods as digitalPoint} from '../controllers/Controller.DigitalPoint';
const router = Router();
router.get('/list/:idDigitalPoint',digitalPoint.listDigitalPoint)
router.post('/create/',digitalPoint.createDigitalPoint);
export default router;