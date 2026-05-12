import React from 'react'
import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-gray-800 text-white text-xs uppercase tracking-wider px-3 py-1 mb-6">
              Since 2020
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Corporate
              <span className="block text-gray-500">Branding</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Achieve a brand identity built on strategy, clarity, and measurable impact. 
              We help corporations build future-ready brands designed to stand out in competitive markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Zap className="w-5 h-5" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm">Global Reach</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block animate-slide-up">
            <div className="bg-gray-900 p-8 rounded-none border border-gray-800">
              <div className="border-l-4 border-gray-600 pl-6 mb-6">
                <p className="text-gray-300 italic">"We shape brands that lead industries"</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-800 py-3">
                  <span className="text-gray-400">Strategy</span>
                  <span className="text-white font-bold">95%</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 py-3">
                  <span className="text-gray-400">Innovation</span>
                  <span className="text-white font-bold">88%</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 py-3">
                  <span className="text-gray-400">Growth</span>
                  <span className="text-white font-bold">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection