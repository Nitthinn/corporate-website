import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Mail, Lock, LogIn } from 'lucide-react'
import toast from 'react-hot-toast'

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || !password) {
      toast.error('Please fill in all fields')
      return
    }
    
    setLoading(true)
    const success = await login(email, password)
    setLoading(false)
    
    if (success) {
      navigate('/admin')
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-gray-900 border border-gray-800 p-8">
          <div className="text-center mb-8">
            <div className="mb-4">
              <div className="text-3xl font-bold text-white">MARVOS</div>
              <div className="text-xs text-gray-500 tracking-wider mt-1">CORPORATE BRANDING</div>
            </div>
            <div className="w-16 h-16 bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Admin Login</h2>
            <p className="text-gray-500 mt-2 text-sm">Access the admin dashboard</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
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
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-700 text-white py-3 font-semibold hover:bg-gray-600 transition-all duration-300 disabled:opacity-50 uppercase tracking-wider text-sm"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="text-gray-400 hover:text-white transition">
                Register here
              </Link>
            </p>
          </div>
          
          <div className="mt-4 p-3 bg-gray-800 border border-gray-700">
            <p className="text-gray-400 text-xs text-center">
              Demo Admin Account: admin@example.com / Admin123!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin