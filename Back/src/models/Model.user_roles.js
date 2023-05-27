import { DataTypes } from "sequelize";
import { sequelize } from "../database/config/connection"

const alias = "user_roles"
const cols = {
    id_role:{
        type: DataTypes.UUID,
        primaryKey : true,
        allowNull:false,
        defaultValue: DataTypes.UUIDV4 
    },
    description:{
        type: DataTypes.TEXT(10),
        allowNull:false
    },
}

const  config = {
    timestamps: false,
};

const user_roles = sequelize.connection.define(alias,cols,config);
user_roles.associate = (models)=>{
    user_roles.hasMany(models.users,{foreignKey:'id_role'})
}

export default user_roles;