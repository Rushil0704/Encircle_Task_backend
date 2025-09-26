import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    blog_title: {
        type: String,
        required: true,
        trim: true
    },
    blog_image: {
        type: String,
        required: false
    },
    blog_image_original: {
        type: String,
        required: false
    },
    blog_description: {
        type: String,
        required: true
    },
    blog_status: {
        type: String,
        enum: ["draft", "published"],
        default: "draft"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Blog", blogSchema);
