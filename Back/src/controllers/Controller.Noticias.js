import db from "../models/";
import Posts from '../models/Model.Post'

const sequelize = db.sequelize;

const createPost = async(req,res)=>{
        Posts.create({
            title:req.body.title,
            body:req.body.body,
            creationDate:'2023-04-04 15:39:25',
            idUsers:req.body.idUsers,
            idPostCategory:req.body.idPostCategory
        })
        .then((result) => {
            res.json({
              data: result,
              status: 201,
            });
          })
        .catch((error) => {
            res.json({
              data: error,
              status: 500,
            });
          });
};

const listPost = async(req,res)=>{
    try {
        const post = await Posts.findOne({
            where: { idusers: req.params.id },
          });
        res.json({
          result: { status: 200, post },
        });
      } catch (error) {
        res.json({
          data: error,
          status: 500,
        });
      }
};

const updatePost = async(req,res)=>{
    try {
        console.log(req.params.idPost);
        const posts = await Posts.findOne({
          where: { idPost: req.params.idPost },
        });
        if (posts) {
            posts.set({
                title:req.body.title,
                body:req.body.body,
                idPostCategory:req.body.idPostCategory
          });
          await posts.save();
          res.json({
            response: { status: 200, data: posts },
          });
        } else {
          res.json({
            data: { msj: "No existe ningún cliente con esa ID", status: 500 },
          });
        }
      } catch (error) {
        res.json({
          data: error,
          status: 500,
        });
      }
};

const deletePost = async(req,res)=>{
    try {
        const post = await Posts.findOne({
          where: { idPost: req.params.idPost },
        });
        if (post) {
          await post.destroy();
          res.json({
            data: "ok",
            status: 200,
          });
        } else {
          res.json({
            data: { msj: "No existe ningún cliente con esa ID", status: 500 },
          });
        }
      } catch (error) {
        res.json({
          data: error,
          status: 500,
        });
      }
};

export const methods = {
    createPost,
    listPost,
    updatePost,
    deletePost
}