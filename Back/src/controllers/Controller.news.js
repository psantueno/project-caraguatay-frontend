import db from "../models";
import Posts from "../models/Model.Post";

const sequelize = db.sequelize;

const createPost = async (req, res) => {
  Posts.create({
    title: req.body.title,
    body: req.body.body,
    creation_date: "2023-04-04 15:39:25",
    id_users: req.body.idUsers,
    id_news_category: req.body.idPostCategory,
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

const listPost = async (req, res) => {
  try {
    const post = await Posts.findOne({
      where: {
        id_news: objWhere.idPost,
      },
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

const listAllPosts = async (req, res) => {
  try {
    const objWhere = {};
    if (req.query.toDate) {objWhere[Op.gt] = req.query.toDate;}
    if (req.query.untilDate) {objWhere[Op.lt] = req.query.untilDate;}
    const { count, rows } = await Posts.findAndCountAll({
      where: objWhere,
    });
    res.json({
      result: { status: 200, count, post: rows },
    });
  } catch (error) {
    res.json({
      data: error,
      status: 500,
    });
  }
};

const listPostByUser = async (req, res) => {
  try {
    const { count, rows } = await Posts.findAndCountAll({
      where: { id_users: req.params.idUser },
    });
    res.json({
      result: { status: 200, count, post: rows },
    });
  } catch (error) {
    res.json({
      data: error,
      status: 500,
    });
  }
};

const listPostByCategory = async (req, res) => {
  try {
    const { count, rows } = await Posts.findAndCountAll({
      where: { id_news_category: req.params.idPostCategory },
    });
    res.json({
      result: { status: 200, count, post: rows },
    });
  } catch (error) {
    res.json({
      data: error,
      status: 500,
    });
  }
};


const updatePost = async (req, res) => {
  try {
    console.log(req.params.idPost);
    const posts = await Posts.findOne({
      where: { id_news: req.params.idPost },
    });
    if (posts) {
      posts.set({
        title: req.body.title,
        body: req.body.body,
        id_news_category: req.body.idPostCategory,
      });
      await posts.save();
      res.json({
        response: { status: 200, data: posts },
      });
    } else {
      res.json({
        data: { msj: "No existe ningún usuario con esa ID", status: 500 },
      });
    }
  } catch (error) {
    res.json({
      data: error,
      status: 500,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Posts.findOne({
      where: { id_news: req.params.idPost },
    });
    if (post) {
      await post.destroy();
      res.json({
        data: "ok",
        status: 200,
      });
    } else {
      res.json({
        data: { msj: "No existe ningún post con esa ID", status: 500 },
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
  listAllPosts,
  listPostByUser,
  listPostByCategory,
  updatePost,
  deletePost,
};
