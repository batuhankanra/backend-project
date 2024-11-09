import Response from '../../lib/response.js'
import Categories from '../../db/models/categories.schema.js'
import CustomError from '../../lib/error.js'
import { Enum } from '../../config/Enum.js'

export const cUpdate= async (req,res)=>{
    try{
        const {id,name,is_active}=req.body
        let updates={}
        if(!id){
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST,'validation error','id is empty')
        }
        if(name){
            updates.name=name

        }
        if(typeof is_active==='boolean'){
            updates.is_active=is_active
        }

        await Categories.updateOne({_id:id},updates)
        

     
        return res.json(Response.successResponse({success:true,updates}))

        
    
    }catch (err){
        let errResponse=Response.errorResponse(err)
        return res.status(errResponse.code).json(errResponse)

    }
} 