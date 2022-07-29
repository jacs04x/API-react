import mongoose from "mongoose";
const { Schema } = mongoose


const postSchema = new Schema({ 
    title : {
        required : true, 
        type : String,
        trim: true
    },
    description :{
        type: String,
        required: true,
        trim: true

    },
    image: {
        url : String ,
        public_id : String
    }


})


export default mongoose.model('Post', postSchema);