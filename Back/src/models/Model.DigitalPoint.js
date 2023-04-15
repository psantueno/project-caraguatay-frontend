import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection"


// `idDigitalPoint` VARCHAR(36) NOT NULL,
// `title` VARCHAR(16) NOT NULL,
// `description` VARCHAR(32) NOT NULL,
// `beginDate` DATE NOT NULL,
// `status` TINYINT NOT NULL,
// `requirements` VARCHAR(128) NULL,
// `idusers` VARCHAR(40) NOT NULL,
// `idDpCategory` INT NOT NULL,
// `idmedia1` INT NOT NULL,

const alias = 'DigitalPonint';
const cols = {
    idDigitalPoint:{ 
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
    beginDate:{
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
    idDpCategory:{
        type:DataTypes.INTEGER(),
        allowNull:false
    },
    idmedia:{
        type:DataTypes.INTEGER(),
        allowNull:false
    }

}
const  config = {
    timestamps: false,
};

const DigitalPoint = sequelize.connection.define(alias,cols,config);
// Ciudades.associate = function (models) {
//     Ciudades.hasMany(models.Clientes, {
//         as: "Clientes",
//         foreignKey: 'idCiudad',
//     })
// }
export default Ciudades