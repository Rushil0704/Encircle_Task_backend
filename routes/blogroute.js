import express from "express";
import upload from "../middleware/upload.js";
import {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
} from "../controller/blogcontroller.js";

const router = express.Router();

// Create Blog with image upload
router.post("/", upload.single("blog_image"), createBlog);

// Get All Blogs
router.get("/", getAllBlogs);

// Get Single Blog
router.get("/:id", getBlogById);

// Update Blog
router.put("/:id", upload.single("blog_image"), updateBlog);

// Delete Blog
router.delete("/:id", deleteBlog);

export default router;
