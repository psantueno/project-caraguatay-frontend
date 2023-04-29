import db from '../models';
import DigitalPoint from '../models/Model.DigitalPoint'

const sequelize = db.sequelize;

const createDigitalPoint = async (req, res) => {
    try {
        const data = {
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
        const digitalPoint = await DigitalPoint.findOne({
            where: { idDigitalPoint: req.params.idDigitalPoint },
        })
        res.json({
            result: {
                status: 200,
                digitalPoint
            }
        },)
    } catch (error) {
        res.json({
            data: error,
            status: 500,
        });
    }
}


const updateDigitalPoint = async (req, res) => {
    try {
        const digitalPoint = await DigitalPoint.findOne({
            where: { idDigitalPoint: req.params.idDigitalPoint },
        })
        if (digitalPoint) {
            digitalPoint.set({
                title: req.body.title,
                description: req.body.description,
                beginDate: req.body.beginDate,
                status: 1,
                requirements: req.body.requirements,
                idDpCategory: req.body.idDpcategory,
                idmedia: req.body.idMedia,
            })
            await digitalPoint.save();
            res.json({
                response: { status: 200, data: digitalPoint },
              });
        }else{
            res.json({
            response: { status: 500, data: 'No se encontro el punto digital' }
        })
        }
    } catch (error) {
        res.json({
            data: error,
            status: 500,
        })
    }
}


const deleteDigitalPoint = async (req, res) => {
    try {
        const digitalPoint = await DigitalPoint.findOne({
            where: { idDigitalPoint: req.params.idDigitalPoint },
        })
        if (digitalPoint) {
            digitalPoint.destroy();
            res.json({
                response: { status: 200, data: 'ok' },
              });
        }else{
            res.json({
            response: { status: 500, data: 'No se encontro el punto digital' }
        })
        }
    } catch (error) {
        res.json({
            data: error,
            status: 500,
        })
    }
}


const listAllDigitalPoint = async (req, res) => {
    const digitalPoint = await DigitalPoint.findAll({})
    res.json({
        result:
            { status: 200, digitalPoint, page: req.params.page, amount }
    },
    )

}


export const methods = {
    createDigitalPoint,
    listDigitalPoint,
    listAllDigitalPoint,
    updateDigitalPoint,
    deleteDigitalPoint,

}