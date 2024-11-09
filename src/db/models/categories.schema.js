import mongoose from "mongoose";

const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    is_active:{
        type:Boolean,
        default:false
    },
    created_by:{
        type:mongoose.SchemaTypes.ObjectId

    }
},{
    versionKey:false,
    timestamps:{
        createdAt:"create_at",
        updatedAt:"updated_at"
    }
})

class Categories extends mongoose.Model {

}
schema.loadClass(Categories)
export default mongoose.model("categories",schema)
