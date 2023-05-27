import { DataTypes } from "sequelize";
import { sequelize } from "../database/config/connection"

const alias = "news_categories";
const cols ={
    id_news_category:{ 
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

const news_categories = sequelize.connection.define(alias,cols,config);
news_categories.associate = (models)=>{
    news_categories.hasMany(models.news)
}

export default news_categories;