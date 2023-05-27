import { DataTypes } from "sequelize";
import { sequelize } from "../database/config/connection"

const alias = "news";
const cols ={
    id_news:{ 
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
    creation_date:{ 
        type: DataTypes.DATE,
        allowNull:false,
    },
    id_users:{ 
        type: DataTypes.TEXT(20),
        allowNull:false,
    },
    id_news_category:{ 
        type: DataTypes.TEXT(20),
        allowNull:false,
    },
};
const  config = {
    timestamps: false,
};

const news = sequelize.connection.define(alias,cols,config);
news.associate = (models)=>{
    news.belongsTo(models.users),
    news.belongsTo(models.news_categories)
}

export default news;