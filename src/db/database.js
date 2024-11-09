import mongoose from "mongoose";

const instance=null
class Database {
    constructor(){
        if(!instance){
            this.mongoose
        }
        return instance
    }
    async connect(option){
        try{
            console.log("DB connecting ...")
            let db= await mongoose.connect(option)
            this.mongoConnection=db
            console.log("DB Connected")
        }catch(err){
            console.log(err)
            process.exit(1)

        }
    }
}
export default new Database()