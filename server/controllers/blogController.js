const Blog = require('../models/Blog');


const getBlogs = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const query = {};
    
    if (status) query.status = status;
    
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('author', 'name email');
    
    const total = await Blog.countDocuments(query);
    
    res.json({
      blogs,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug })
      .populate('author', 'name email');
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    

    blog.views += 1;
    await blog.save();
    
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createBlog = async (req, res) => {
  try {
    const { title, slug, coverImage, content, excerpt, category, tags, status } = req.body;
    
    
    let processedTags = [];
    if (tags) {
      if (Array.isArray(tags)) {
        processedTags = tags;
      } else if (typeof tags === 'string') {
        processedTags = tags.split(',').map(t => t.trim()).filter(t => t !== '');
      }
    }
    
   
    let finalSlug = slug;
    if (!finalSlug && title) {
      finalSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
    }
    
    
    const existingBlog = await Blog.findOne({ slug: finalSlug });
    if (existingBlog) {
      return res.status(400).json({ message: 'Slug already exists' });
    }
    
    const blog = await Blog.create({
      title,
      slug: finalSlug,
      coverImage: coverImage || 'https://via.placeholder.com/1200x600',
      content,
      excerpt: excerpt || content.substring(0, 200),
      category: category || 'General',
      tags: processedTags,
      status: status || 'draft',
      author: req.user.id
    });
    
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
   
    if (req.body.tags) {
      if (Array.isArray(req.body.tags)) {
        req.body.tags = req.body.tags;
      } else if (typeof req.body.tags === 'string') {
        req.body.tags = req.body.tags.split(',').map(t => t.trim()).filter(t => t !== '');
      }
    }
    
   
    if (req.body.title && !req.body.slug) {
      req.body.slug = req.body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
    }
    
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    await blog.deleteOne();
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog
};
