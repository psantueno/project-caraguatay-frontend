import { DataTypes } from "sequelize";
import { sequelize } from "../database/config/connection"

const alias = "userRole"
const cols = {
    idRole:{
        type: DataTypes.UUID,
        primaryKey : true,
        allowNull:false,
        defaultValue: DataTypes.UUIDV4 
    },
    descType:{
        type: DataTypes.TEXT(10),
        allowNull:false
    },
}

const  config = {
    timestamps: false,
};

const UserRole = sequelize.connection.define(alias,cols,config);
UserRole.associate = (models)=>{
    Users.hasMany(models.User,{foreignKey:'idRole'})
}

export default UserRole;