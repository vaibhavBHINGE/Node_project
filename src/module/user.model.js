import mongoose , {Schema} from "mongoose";

const userSchema= new Schema({
    userName:{
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
        minLenagth:1,
        maxLenght:30
    },
    Pssword:{
        type:String,
        required:true,
        minLenagth:8,
        maxLenght:12
    },
    email:{
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true
    }
},

{
        timestamps:true
    }

)
export const userModel= mongoose.model("User",userSchema);