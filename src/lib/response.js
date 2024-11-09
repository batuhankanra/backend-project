import { Enum } from "../config/Enum"
import CustomError from "./error"

class Response {
    constructor(){

    }
    static successResponse(data,code){
        return {
            code,
            data
        }
    }
    static errorResponse(err){
        if(err instanceof CustomError){
            return {
                code:err.code,
                error:{
                    message:err.message,
                    desciption:err.description
                }
            }
        }
        return {
            code:Enum.HTTP_CODES.INT_SERVER_ERROR,
            error:{
                message:"Unknown Error",
                desciption:err.message
            }
        }
    }
}