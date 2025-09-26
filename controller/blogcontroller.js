import Blog from "../modal/blog.js";

// Create Blog
export const createBlog = async (req, res) => {
    try {
        const { blog_title, blog_description, blog_status, user } = req.body;
        const blog_image = req.file ? req.file.filename : null;
        const blog_image_original = req.file ? req.file.originalname : null;

        const blog = new Blog({
            blog_title,
            blog_image,
            blog_image_original,
            blog_description,
            blog_status,
            user,
        });
        await blog.save();
        res.status(201).json({ success: true, message: "Blog created successfully", blog });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get All Blogs
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate("user", "name email");
        res.status(200).json({ success: true, blogs });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get Single Blog
export const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate("user", "name email");
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.status(200).json({ success: true, blog });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update Blog
export const updateBlog = async (req, res) => {
    try {
        const { blog_title, blog_description, blog_status, user } = req.body;
        let updateData = {
            blog_title,
            blog_description,
            blog_status,
            user,
        };


        if (req.file) {
            updateData.blog_image = req.file.filename;
            updateData.blog_image_original = req.file.originalname;
        }

        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        res.status(200).json({ success: true, message: "Blog updated successfully", blog });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete Blog
export const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.status(200).json({ success: true, message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
