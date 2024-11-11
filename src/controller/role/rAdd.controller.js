import { Enum } from "../../config/Enum.js"
import CustomError from "../../lib/error.js"
import Response from "../../lib/response.js"
import Role from '../../db/models/roles.schema.js'
import rolePrivlegesSchema from "../../db/models/rolePrivleges.schema.js"



export const rAdd=async (req,res)=>{
    try{
        const body=req.body
        const permissions=body.permissions
        if(!permissions || !Array.isArray(permissions) || permissions.length===0){
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST,"validetion error",'validation Error permission')
        }
        if(!body.role_name){
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST,"validetion error",'validation Error rol name')
        }
        const roleSave=await Role({
            role_name:body.role_name
        })
        roleSave.save()
        const permissionDoc=permissions.map(per=>({
            role_id:roleSave._id,
            permission:per
        }))
        await rolePrivlegesSchema.insertMany(permissionDoc)
        return res.status(Enum.HTTP_CODES.CREATED).json(Response.successResponse({permissionDoc,roleSave},Enum.HTTP_CODES.CREATED))

    }catch(err){
        let errResponse=Response.errorResponse(err)
        return res.status(errResponse.code).json(errResponse.error)
    }
}