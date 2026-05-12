import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Calendar, User, Tag } from 'lucide-react'

const BlogPage = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPublishedBlogs()
  }, [])

  const fetchPublishedBlogs = async () => {
    try {
      const response = await axios.get('/api/blogs?status=published')
      setBlogs(response.data.blogs || [])
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-black flex items-center justify-center pt-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <section className="pt-32 pb-20 bg-black">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Blog</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Insights, thoughts, and stories from our team about technology, innovation, and business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                key={blog._id}
                to={`/blog/${blog.slug}`}
                className="bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden bg-gray-800">
                  <img
                    src={blog.coverImage || 'https://via.placeholder.com/400x300'}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {blog.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-400 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="mt-4 inline-flex items-center text-gray-400 font-semibold hover:text-white transition-colors">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {blogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No blog posts available yet.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default BlogPage