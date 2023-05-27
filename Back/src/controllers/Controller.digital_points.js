import db from '../models';
import digital_points from '../models/Model.digital_points';

const sequelize = db.sequelize;

const createDigitalPoint = async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            description: req.body.description,
            begin_date: req.body.beginDate,
            status: 1,
            id_users: req.body.idUsers,
            requirements: req.body.requirements,
            id_dp_Category: req.body.idDpcategory,
            id_media: req.body.idMedia,
        }
        console.log(data);
        digital_points.create(data)
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
        const digitalPoint = await digital_points.findOne({
            where: { id_digital_point: req.params.idDigitalPoint },
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
        const digitalPoint = await digital_points.findOne({
            where: { id_digital_point: req.params.idDigitalPoint },
        })
        if (digitalPoint) {
            digitalPoint.set({
                title: req.body.title,
                description: req.body.description,
                begin_date: req.body.beginDate,
                status: 1,
                requirements: req.body.requirements,
                id_dp_Category: req.body.idDpcategory,
                id_media: req.body.idMedia,
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
        const digitalPoint = await digital_points.findOne({
            where: { id_digital_point: req.params.idDigitalPoint },
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
    const {rows,count} = await digital_points.findAndCountAll({})
    res.json({
        result:
            { status: 200, digitalPoints:rows, page: req.params.page, amount:count }
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