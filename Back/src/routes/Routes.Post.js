import { Router } from "express";
import {methods as postController} from '../controllers/Controller.Noticias';

const router = Router();
router.get('/list/all',postController.listAllPosts);
router.get('/list/post/:idPost',postController.listPost);
router.get('/list/byUser/:idUser',postController.listPostByUser);
router.post('/create/',postController.createPost);
router.put('/update/:idPost',postController.updatePost);
router.delete('/delete/:idPost',postController.deletePost);
export default router;