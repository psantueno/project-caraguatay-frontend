import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection"


// `idDpCategory` INT NOT NULL,
// `description` VARCHAR(45) NULL,

const alias = 'dp_categories';
const cols = {
    id_dp_category:{ 
        type: DataTypes.UUID,
        primaryKey : true,
        allowNull:false,
        defaultValue: DataTypes.UUIDV4 
    },
    description:{
        type: DataTypes.TEXT(45),
        allowNull:false
    },

}
const  config = {
    timestamps: false,

};

const dp_categories = sequelize.connection.define(alias,cols,config);
// Ciudades.associate = function (models) {
//     Ciudades.hasMany(models.Clientes, {
//         as: "Clientes",
//         foreignKey: 'idCiudad',
//     })
// }
export default dp_categories