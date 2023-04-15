import { DataTypes } from "sequelize";
import { sequelize } from "../database/config/connection"

const alias = "Users";
const cols = {
    idUsers:{ 
        type: DataTypes.UUID,
        primaryKey : true,
        allowNull:false,
        defaultValue: DataTypes.UUIDV4 
    },
    name:{
        type: DataTypes.TEXT(20),
        allowNull:false
    },
    lastname:{
        type: DataTypes.TEXT(20),
        allowNull:false
    },
    email:{
        type: DataTypes.TEXT(45),
        allowNull:false
    },
    password:{
        type: DataTypes.TEXT(45),
        allowNull:false
    },
    creationDate:{
        type: DataTypes.DATE(),
        allowNull:false
    },
    enabled:{
        type:DataTypes.BOOLEAN(),
    },
    avatar:{
        type:DataTypes.TEXT(256),
        allowNull:false
    },
    idRole:{
        type:DataTypes.INTEGER(),
        allowNull:false,
    }

}
const  config = {
    timestamps: false,

};
const Users = sequelize.connection.define(alias,cols,config)
Users.associate = (models)=>{
    Users.belongsTo(models.UserRole)
}


export default Users;