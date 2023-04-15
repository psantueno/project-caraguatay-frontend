import db from "../models/";
import Users from "../models/Model.User";
import UserRole from "../models/Model.UserRole";
import { validateCliente } from "./helpers/validations.Usuarios";
//TODO:
// ----Usuarios: 
//     ---->Lista Usuarios

const sequelize = db.sequelize;

const createUsuario = async (req, res) => {
    console.log(req.body);
    // const checksum = validateCliente.validar(req.body);
    // console.log("Check sum", checksum);
    // if (checksum !== 8) {
    //   res.json({
    //     data: {
    //       msj: "Error en los campos proporcionados",
    //       checksum,
    //     },
    //     status: 500,
    //   });
    //   return;
    // }
    Users.create({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      enabled: 1,
      creationDate:'15-04-2023',
      password: req.body.password,
      avatar: req.body.avatar,
      idRole: req.body.idRole,
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


  const listUser = async (req,res)=>{
    try {
        const user = await Users.findOne({
            where: { idusers: req.params.id },
          });
        res.json({
          result: { status: 200, user, page: req.params.page, amount },
        });
      } catch (error) {
        res.json({
          data: error,
          status: 500,
        });
      }
  }

const updateUser = async (req,res)=>{
    try {
        // const checksum = validateCliente.validar(req.body);
        // console.log("Actualizar Clientes", req.body, checksum);
        // if (checksum !== 8) {
        //   res.json({
        //     data: {
        //       msj: "Error en los campos proporcionados",
        //       checksum,
        //     },
        //     status: 500,
        //   });
        //   return;
        // }
        console.log(req.params.id);
        const user = await Users.findOne({
          where: { idusers: req.params.id },
        });
        if (user) {
          user.set({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            enabled: 1,
            password: req.body.password,
            avatar: req.body.avatar,
            idRole: req.body.idRole,
          });
          await user.save();
          res.json({
            response: { status: 200, data: user },
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
}

const deleteUser = async (req,res)=>{
    try {
        const user = await Users.findOne({
          where: { idusers: req.params.id },
        });
        if (user) {
          await user.destroy();
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
}


const listAllUsers = async (req,res)=>{
    try {
        console.log("Listar Usuarios");
        const amount = await Users.count();
        const clientes = await Users.findAll({order: [['name', 'ASC']],});
        res.json({
          result: { status: 200, clientes, page: req.params.page, amount },
        });
      } catch (error) {
        res.json({
          data: error,
          status: 500,
        });
      }
}


  export const methods = {
    createUsuario,
    listUser,
    listAllUsers,
    updateUser,
    deleteUser,
  }