import mongoose , { Schema } from "mongoose";

const videoSchema = new Schema({
    {timestamp: true},
    
})

export const Video = mongoose.model("Video", videoSchema);
