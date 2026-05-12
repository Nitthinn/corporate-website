import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Calendar, User, Tag, Eye } from 'lucide-react'

const BlogDetailPage = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlog()
  }, [slug])

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`/api/blogs/${slug}`)
      setBlog(response.data)
    } catch (error) {
      console.error('Error fetching blog:', error)
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

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-black flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Blog Not Found</h1>
            <Link to="/blog" className="text-gray-400 hover:text-white transition">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <article className="pt-32 pb-20 bg-black">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Link to="/blog" className="text-gray-400 hover:text-white transition mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {blog.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {blog.author?.name || 'Admin'}
              </span>
              <span className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                {blog.category}
              </span>
              <span className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                {blog.views} views
              </span>
            </div>
          </div>
          
          {/* Cover Image */}
          {blog.coverImage && (
            <div className="mb-8 border border-gray-800">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-auto"
              />
            </div>
          )}
          
          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-400 text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {blog.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}

export default BlogDetailPage