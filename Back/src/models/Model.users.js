import { DataTypes } from "sequelize";
import { sequelize } from "../database/config/connection"

const alias = "users";
const cols = {
    id_user:{ 
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
    creation_date:{
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
    id_role:{
        type:DataTypes.INTEGER(),
        allowNull:false,
    },
    password:{
    type: DataTypes.TEXT(45),
    allowNull:false
    }
    
}
const  config = {
    timestamps: false,

};
const users = sequelize.connection.define(alias,cols,config)
users.associate = (models)=>{
    users.belongsTo(models.user_roles),
    users.hasMany(models.news)
}


export default users;