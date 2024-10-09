const prisma = require("../config/prisma")
const createError = require("../utils/createError")


exports.createLandmark = async (req,res,next) =>{
    try {
        const {title , lat , lng} = req.body
        const landmark = await prisma.landmark.create({
            data : {
                title : title ,
                lat : lat ,
                lng : lng 
            }
        })


        res.send({ landmark })
    } catch (err) {
        next(err)
    }
}

exports.getAllLandmark = async (req,res,next) => {
    try {
        const landmarks = await prisma.landmark.findMany({
            select : {
                id : true,
                title: true,
                lat : true,
                lng : true
            }
        })
        
        if (!landmarks) {
            return createError(400,"Landmarks not found")
        }
        
        res.json({landmarks})
    } catch (err) {
        next(err)
    }
}