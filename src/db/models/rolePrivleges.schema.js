import mongoose from "mongoose";


const schema=mongoose.Schema({
    role_id:{
        type:mongoose.SchemaTypes.ObjectId,
        default:true
    },
    permission:{
        type:String,
        required:true
    },
    created_by:{
        type:mongoose.SchemaTypes.ObjectId
    }
},{
    versionKey:false,
    timestamps:{
        createdAt:'create_at',
        updatedAt:'updated_at'
    }
})

class RolePrivleges extends mongoose.Model{

}
schema.loadClass(RolePrivleges)
export default mongoose.model('role_privleges',schema)