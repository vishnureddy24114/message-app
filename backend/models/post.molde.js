import mongoose from "mongoose";
import User from "../models/user.model.js";
const postSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required: true,
        },

        text:{
        type: String,
        },

        img:{
            type: String,
        },

        likes:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'User', 
            }
        ],

        comments:[
            {
                text: {
                    type:String,
                    required:true,
                },

                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: User,
                    require: true,
                },
            },
        ],
    },

    { timestamps:true });

const Post = mongoose.model("post" , postSchema);

export default Post;