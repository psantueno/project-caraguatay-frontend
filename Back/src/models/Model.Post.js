import { DataTypes } from "sequelize";
import { sequelize } from "../database/config/connection"

const alias = "Post";
const cols ={
    idPost:{ 
        type: DataTypes.UUID,
        primaryKey : true,
        allowNull:false,
        defaultValue: DataTypes.UUIDV4 
    },
    title:{ 
        type: DataTypes.TEXT(20),
        allowNull:false,
    },
    body:{ 
        type: DataTypes.TEXT(20),
        allowNull:false,
    },
    creationDate:{ 
        type: DataTypes.DATE,
        allowNull:false,
    },
    idUsers:{ 
        type: DataTypes.TEXT(20),
        allowNull:false,
    },
    idPostCategory:{ 
        type: DataTypes.TEXT(20),
        allowNull:false,
    },
};
const  config = {
    timestamps: false,
};

const Posts = sequelize.connection.define(alias,cols,config);
Posts.associate = (models)=>{
    Posts.belongsTo(models.Users),
    Posts.belongsTo(models.PostCategory)
}

export default Posts;