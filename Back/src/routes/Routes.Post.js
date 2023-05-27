import { Router } from "express";
import {methods as newsController} from '../controllers/Controller.news';

const router = Router();
router.get('/list/all',newsController.listAllPosts);
router.get('/list/post/:idPost',newsController.listPost);
router.get('/list/byUser/:idUser',newsController.listPostByUser);
router.get('/list/byCategory/:idPostCategory',newsController.listPostByCategory);
router.post('/create/',newsController.createPost);
router.put('/update/:idPost',newsController.updatePost);
router.delete('/delete/:idPost',newsController.deletePost);
export default router;