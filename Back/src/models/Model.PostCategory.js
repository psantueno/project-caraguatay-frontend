import { DataTypes } from "sequelize";
import { sequelize } from "../database/config/connection"

const alias = "Post";
const cols ={
    idPostidPostCategory:{ 
        type: DataTypes.UUID,
        primaryKey : true,
        allowNull:false,
        defaultValue: DataTypes.UUIDV4 
    },
    description:{ 
        type: DataTypes.TEXT(45),
        allowNull:false,
    }
};
const  config = {
    timestamps: false,
};

const PostsCategory = sequelize.connection.define(alias,cols,config);
PostsCategory.associate = (models)=>{
    PostsCategory.hasMany(models.Posts)
}

export default PostsCategory;