import mongoose from 'mongoose';
const {Schema, model} = mongoose;
const Types = Schema.Types;

const schema = new mongoose.Schema(
    {
        // fullname:{
        //     type:String,
        //     require:true
        // },
        username:{
            type: String,
            require:true,
        },
       
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        token: {
             type: String
        },
        avata:{
            type:String,
            
        },
       // postIds:{
       //     type:[Types.ObjectId],
       //     require:true,
      //      default:[]
      //  }
    }
);
export const UserModel = mongoose.model('UserModel', schema);