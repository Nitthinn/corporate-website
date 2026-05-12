import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-gray-800 text-white text-xs uppercase tracking-wider px-3 py-1 mb-6">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We Shape Brands That Lead Industries
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We help corporations build future-ready brands designed to stand out in competitive markets. 
              Our approach combines strategic thinking with creative excellence.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1 h-8 bg-gray-600 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Refined for Maximum Impact</h4>
                  <p className="text-gray-500 text-sm">We craft branding solutions with a sharp focus on clarity, precision, and purpose.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-8 bg-gray-600 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Data-Driven Strategy</h4>
                  <p className="text-gray-500 text-sm">Every decision is backed by research and analytics.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-8 bg-gray-600 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Global Perspective</h4>
                  <p className="text-gray-500 text-sm">We understand markets across borders and cultures.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-none border border-gray-800">
            <div className="text-4xl font-bold text-white mb-4">$25K+</div>
            <div className="text-gray-400 mb-6">Average client ROI increase</div>
            <div className="w-full bg-gray-800 h-1 mb-6">
              <div className="bg-gray-600 h-1" style={{ width: '85%' }}></div>
            </div>
            <div className="text-4xl font-bold text-white mb-4">500+</div>
            <div className="text-gray-400">Successful brand transformations</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection