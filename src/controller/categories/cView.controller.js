import Response from '../../lib/response.js'
import Categories from '../../db/models/categories.schema.js'

export const cView= async (req,res)=>{
    try{
        const view=await Categories.find({})

        return res.json(Response.successResponse({view},200))
        
    
    }catch (err){
        let errResponse=Response.errorResponse(err)
        return res.status(errResponse.code).json(errResponse)

    }
}