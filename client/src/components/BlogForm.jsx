import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { X } from 'lucide-react'

const BlogForm = ({ blog, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    slug: blog?.slug || '',
    coverImage: blog?.coverImage || 'https://via.placeholder.com/1200x600',
    content: blog?.content || '',
    excerpt: blog?.excerpt || '',
    category: blog?.category || 'General',
    tags: blog?.tags && Array.isArray(blog?.tags) ? blog?.tags.join(', ') : (blog?.tags || ''),
    status: blog?.status || 'draft'
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.title || !formData.content) {
      toast.error('Please fill in required fields')
      return
    }
    
    setLoading(true)
    
    try {
      const token = localStorage.getItem('token')
      
      if (!token) {
        toast.error('Please login first')
        onClose()
        return
      }
      
      let slug = formData.slug
      if (!slug && formData.title) {
        slug = formData.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
      }
      
      let tagsArray = []
      if (formData.tags && typeof formData.tags === 'string' && formData.tags.trim()) {
        tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
      }
      
      const requestData = {
        title: formData.title,
        slug: slug,
        coverImage: formData.coverImage,
        content: formData.content,
        excerpt: formData.excerpt || formData.content.substring(0, 200),
        category: formData.category,
        tags: tagsArray,
        status: formData.status
      }
      
      if (blog) {
        await axios.put(`/api/blogs/${blog._id}`, requestData, {
          headers: { Authorization: `Bearer ${token}` }
        })
        toast.success('Blog updated successfully')
      } else {
        await axios.post('/api/blogs', requestData, {
          headers: { Authorization: `Bearer ${token}` }
        })
        toast.success('Blog created successfully')
      }
      
      onSuccess()
    } catch (error) {
      console.error('Error:', error.response?.data)
      toast.error(error.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gray-900 border border-gray-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">
            {blog ? 'Edit Blog' : 'Create New Blog'}
          </h2>
          <button
            onClick={onClose}
            type="button"
            className="text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-gray-300 font-medium mb-2 text-sm">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 font-medium mb-2 text-sm">
              Slug (URL) - Leave empty to auto-generate
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="Auto-generated from title"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 font-medium mb-2 text-sm">
              Cover Image URL
            </label>
            <input
              type="text"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 font-medium mb-2 text-sm">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 font-medium mb-2 text-sm">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="React, JavaScript, Node.js"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
            />
            <p className="text-xs text-gray-500 mt-1">Example: React, MongoDB, Express</p>
          </div>
          
          <div>
            <label className="block text-gray-300 font-medium mb-2 text-sm">
              Excerpt (Optional)
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows="3"
              placeholder="Brief summary of your blog post..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
            ></textarea>
          </div>
          
          <div>
            <label className="block text-gray-300 font-medium mb-2 text-sm">
              Content *
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="10"
              placeholder="Write your blog content here..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
              required
            ></textarea>
          </div>
          
          <div>
            <label className="block text-gray-300 font-medium mb-2 text-sm">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gray-700 text-white py-3 font-semibold hover:bg-gray-600 transition-all duration-300 disabled:opacity-50 uppercase tracking-wider text-sm"
            >
              {loading ? 'Saving...' : (blog ? 'Update Blog' : 'Create Blog')}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-800 text-gray-400 py-3 font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BlogForm