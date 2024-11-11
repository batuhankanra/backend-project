import { Enum } from "../../config/Enum.js"
import CustomError from "../../lib/error.js"
import Response from "../../lib/response.js"
import Roles from '../../db/models/roles.schema.js'
import rolePrivlegesSchema from "../../db/models/rolePrivleges.schema.js"





export const rUpdate=async (req,res)=>{
    const {id,role_name,is_active,permissions}=req.body

    try{
        let updates={}
        if(!id){
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST,'validation Error','id is empty ')
        }
        if(role_name){
            updates.role_name=role_name
        }
        if(typeof is_active==='boolean'){
            updates.is_active=is_active
        }
        if(permissions && Array.isArray(permissions) && permissions.length>0){
            const idFind=await rolePrivlegesSchema.find({role_id:id})
            const removePrivleges= idFind.filter(id=>!permissions.includes(id.permissions))
            const newPrivleges=permissions.filter(b=>!idFind.map(p=>p.permissions).includes(b))
            if(removePrivleges.length>0){
                await rolePrivlegesSchema.deleteMany({_id:{$in:removePrivleges.map(x=>x._id)}})  
            }
            if(newPrivleges.length>0){
                const privleges=newPrivleges.map(priv=>({
                    role_id:id,
                    permission:priv,
                    created_by:req.body.user?.id ?? null
                }))
                await rolePrivlegesSchema.insertMany(privleges)
            }
        }
        await Roles.updateOne({_id:req.body.id},updates)
        res.status(Enum.HTTP_CODES.OK).json(Response.successResponse({success:true}))

    }
    catch(err){
        let errResponse=Response.errorResponse(err)

        return res.status(errResponse.code).json({errResponse})
    }
}