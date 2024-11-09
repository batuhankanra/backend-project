import Response from '../../lib/response.js'
import Categories from '../../db/models/categories.schema.js'
import CustomError from '../../lib/error.js'
import { Enum } from '../../config/Enum.js'

export const cDelete= async (req,res)=>{
    try{
        const {id}=req.body
      
        if(!id){
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST,'validation error','id is empty')
        }
        
        

        await Categories.deleteOne({_id:id})
        

     
        return res.json(Response.successResponse({success:true}))

        
    
    }catch (err){
        let errResponse=Response.errorResponse(err)
        return res.status(errResponse.code).json(errResponse)

    }
} 