import Response from "../../lib/response.js"
import Role from '../../db/models/roles.schema.js'


export const rViews=async (req,res)=>{
    try{
        const find=await Role.find({})
        const trueRes=Response.successResponse(find,200)
        return res.status(trueRes.code).json(trueRes)
    }catch(err){
        let errorResponse=Response.errorResponse(err)
        return res.status(errorResponse.code).json({errorResponse})

    }
}