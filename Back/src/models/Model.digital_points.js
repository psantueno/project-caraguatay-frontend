import { DataTypes } from "sequelize";
import { sequelize } from "../database/config/connection"


// `idDigitalPoint` VARCHAR(36) NOT NULL,
// `title` VARCHAR(16) NOT NULL,
// `description` VARCHAR(32) NOT NULL,
// `beginDate` DATE NOT NULL,
// `status` TINYINT NOT NULL,
// `requirements` VARCHAR(128) NULL,
// `idusers` VARCHAR(40) NOT NULL,
// `idDpCategory` INT NOT NULL,
// `idmedia1` INT NOT NULL,

const alias = 'digital_points';
const cols = {
    id_digital_point:{ 
        type: DataTypes.UUID,
        primaryKey : true,
        allowNull:false,
        defaultValue: DataTypes.UUIDV4 
    },
    title:{
        type: DataTypes.TEXT(16),
        allowNull:false
    },
    description:{
        type: DataTypes.TEXT(32),
        allowNull:false
    },
    begin_date:{
        type: DataTypes.DATE(),
        allowNull:false
    },
    status:{
        type:DataTypes.BOOLEAN(),
        allowNull:false
    },
    requirements:{
        type: DataTypes.TEXT(160),
        allowNull:false
    },
    idUsers:{
        type:DataTypes.TEXT(40),
        allowNull:false
    },
    id_dp_Category:{
        type: DataTypes.UUID,
        allowNull:false
    },
    id_media:{
        type: DataTypes.UUID,
        allowNull:false
    }

}
const  config = {
    timestamps: false,
};

const digital_points = sequelize.connection.define(alias,cols,config)
// Ciudades.associate = function (models) {
//     Ciudades.hasMany(models.Clientes, {
//         as: "Clientes",
//         foreignKey: 'idCiudad',
//     })
// }
export default digital_points