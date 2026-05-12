import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { User, Mail, Lock, UserPlus } from 'lucide-react'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
   
    if (!name || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields')
      return
    }
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }
    
    setLoading(true)
    
    try {
      const response = await axios.post('/api/auth/register', {
        name,
        email,
        password,
        role: 'editor'
      })
      
      if (response.data.success) {
        
        localStorage.setItem('token', response.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
        
        toast.success('Registration successful! Redirecting to dashboard...')
        
       
        setTimeout(() => {
          navigate('/admin')
        }, 1500)
      }
    } catch (error) {
      console.error('Registration error:', error.response?.data)
      const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.'
      toast.error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        <div className="bg-gray-900 border border-gray-800 p-8">
          <div className="text-center mb-8">
            <div className="mb-4">
              <div className="text-3xl font-bold text-white">MARVOS</div>
              <div className="text-xs text-gray-500 tracking-wider mt-1">CORPORATE BRANDING</div>
            </div>
            <div className="w-16 h-16 bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <UserPlus className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Create Account</h2>
            <p className="text-gray-500 mt-2 text-sm">Register to access the admin dashboard</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-300 font-medium mb-2 text-sm">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 font-medium mb-2 text-sm">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 font-medium mb-2 text-sm">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Password must be at least 6 characters</p>
            </div>
            
            <div>
              <label className="block text-gray-300 font-medium mb-2 text-sm">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-700 text-white py-3 font-semibold hover:bg-gray-600 transition-all duration-300 disabled:opacity-50 uppercase tracking-wider text-sm"
            >
              {loading ? 'Creating Account...' : 'Register'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Already have an account?{' '}
              <Link to="/admin/login" className="text-gray-400 hover:text-white transition">
                Login here
              </Link>
            </p>
          </div>
          
          <div className="mt-4 p-3 bg-gray-800 border border-gray-700">
            <p className="text-gray-400 text-xs text-center">
              After registration, you will be automatically logged in and redirected to the admin dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
