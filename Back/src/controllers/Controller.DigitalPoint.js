import db from '../models';
import DigitalPoint from '../models/Model.DigitalPoint'

const sequelize = db.sequelize;

const createDigitalPoint = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.body.idUsers);
        console.log(req.body.idDpcategory);
       const data =  {
            title: req.body.title,
            description: req.body.description,
            beginDate: req.body.beginDate,
            status: 1,
            idUsers: req.body.idUsers,
            requirements: req.body.requirements,
            idDpCategory: req.body.idDpcategory,
            idmedia: req.body.idMedia,
        }
        console.log(data);
        DigitalPoint.create(data)
        .then((result) => {
            res.json({
                data: result,
                status: 201,
            });
        })
        .catch((error) => {
            res.json({
                data: error,
                status: 500,
            });
        });
    } catch (error) {
        res.json({
            data: error,
            status: 500,
        });
    }    
}


const listDigitalPoint = async (req, res) => {
    try {
        console.log(req.params);
        const digitalPoint = await DigitalPoint.findOne({
            where: { idDigitalPoint: req.params.idDigitalPoint },
        })
        res.json({ 
            result: { 
                status: 200, 
                digitalPoint } 
            },)
    } catch (error) {
        res.json({
            data: error,
            status: 500,
        });
    }    
}


const updateDigitalPoint = async (req, res) => {

}


const deleteDigitalPoint = async (req, res) => {

}


const listAllDigitalPoint = async (req, res) => {
    const digitalPoint = await DigitalPoint.findAll({})
    res.json({ result: { status: 200, digitalPoint, page: req.params.page, amount } },)

}


export const methods = {
    createDigitalPoint,
    listDigitalPoint,
    listAllDigitalPoint,
    updateDigitalPoint,
    deleteDigitalPoint,

}