import Response from "../../lib/response.js"

import Roles from '../../db/models/roles.schema.js'
import rolePrivlegesSchema from "../../db/models/rolePrivleges.schema.js"
import CustomError from "../../lib/error.js"
import { Enum } from "../../config/Enum.js"


export const rDelete=async (req,res)=>{
    try{
        const {id }=req.body
        if(!id){
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST,'validation Error','id validation Err')
        }
        await Roles.deleteMany({_id:id})
        await rolePrivlegesSchema.deleteMany({role_id:id})
        return res.status(Enum.HTTP_CODES.OK).json(Response.successResponse({success:true}))

    }catch(err){
        
        let errResponse=Response.errorResponse(err)

        return res.status(errResponse.code).json({errResponse}) 
    }
}