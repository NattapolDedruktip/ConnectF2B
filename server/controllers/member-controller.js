const prisma = require("../config/prisma");
const createError = require("../utils/createError");

exports.listMember = async (req,res,next) => {
    try {
        const member = await prisma.user.findMany({
            select:{
                id : true,
                email : true,
                role : true,
                updatedAt : true,
            },
        });

        res.json({member});

    } catch (err) {
        console.log(err);
        next(err);
    }
};

exports.updateMemberById = async(req,res,next) => {
    try {
        const {memberId} = req.params
        const {role} = req.body

        const user = await prisma.user.findFirst({
            where : {
                id : Number(memberId)
            }
        })

        if(!user) {
            return createError(400,"User not found")
        }

        const member = await prisma.user.update({
            where : {
                id : Number(memberId),
            },
            data : {
                role : role,
            },
        });


    
        res.send({message : "update successfully"})
    } catch (err) {
        console.log(err)
        next(err)
    }
}

exports.deleteMemberById = async (req,res,next) =>{
    try {
        const {memberId} = req.params
        // const {role} = req.body

        const user = await prisma.user.findFirst({
            where : {
                id : Number(memberId)
            }
        })

        if(!user) {
            return createError(400,"User not found")
        }
        const member = await prisma.user.delete({
            where : {
                id : Number(memberId)
            }
        })

        
        res.json({message : "Deleted successfully"})
    } catch (err) {
        // console.log(err)
        next(err)
    }
}