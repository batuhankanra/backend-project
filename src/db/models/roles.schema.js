import mongoose from "mongoose";


const schema=mongoose.Schema({
    is_active:{
        type:Boolean,
        default:true
    },
    role_name:{
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

class Role extends mongoose.Model{

}
schema.loadClass(Role)
export default mongoose.model('role',schema)