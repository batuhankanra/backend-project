import { Enum } from '../../config/Enum.js'
import CustomError from '../../lib/error.js'
import Response from '../../lib/response.js'
import Categories from '../../db/models/categories.schema.js'

export const cAdd= async (req,res)=>{
    try{
        const {name}=req.body

        if(!name){
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST,'validation Error', 'name is empty')
        }
        let category= new Categories({
            name,
            is_active:true,
            created_by:req.user?.id
        })
        await category.save()

        res.json(Response.successResponse({sucess:true},200)).status(200)
        
    
    }catch (err){
        let errResponse=Response.errorResponse(err)
        return res.status(errResponse.code).json(errResponse)

    }
}