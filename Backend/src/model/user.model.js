import mongoose , {Schema} from "mongoose";

const Userschema = new Schema({
    username : {
        type : String,
        required: true , 
        unique : true,
        lowercase : true,
    },
    password : {
        type : String,
        required : true,
    },
    phone : {
        type : String,
        required : true , 
        unique : true,
    }
})

export const User = mongoose.model("User" , Userschema);
