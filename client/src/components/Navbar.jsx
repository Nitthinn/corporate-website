import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsOpen(false)
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black border-b border-gray-800 py-3' : 'bg-black py-5'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-center">
            <div className="text-2xl font-bold tracking-tighter text-white">MARVOS</div>
            <div className="text-xs text-gray-500 tracking-wider">CORPORATE BRANDING</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            {user ? (
              <div className="relative group">
                <button className="text-gray-400 hover:text-white text-sm uppercase tracking-wider">
                  {user.name}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <button
                    onClick={() => navigate('/admin')}
                    className="block w-full text-left px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 text-sm"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-500 hover:text-red-400 hover:bg-gray-800 text-sm"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/register"
                  className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
                >
                  Register
                </Link>
                <Link
                  to="/admin/login"
                  className="bg-gray-700 text-white px-5 py-2 text-sm uppercase tracking-wider hover:bg-gray-600 transition-colors"
                >
                  Admin Login
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-black p-4 border border-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            {user ? (
              <>
                <button
                  onClick={() => {
                    navigate('/admin')
                    setIsOpen(false)
                  }}
                  className="block w-full text-left text-gray-400 hover:text-white text-sm uppercase tracking-wider"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-red-500 hover:text-red-400 text-sm uppercase tracking-wider"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="space-y-3">
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-400 hover:text-white text-sm uppercase tracking-wider"
                >
                  Register
                </Link>
                <Link
                  to="/admin/login"
                  onClick={() => setIsOpen(false)}
                  className="block bg-gray-700 text-white px-4 py-2 text-center text-sm uppercase tracking-wider"
                >
                  Admin Login
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar