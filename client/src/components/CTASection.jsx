import React from 'react'
import { ArrowRight, Mail, Phone } from 'lucide-react'

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch With Our Team
            </h2>
            <p className="text-gray-400 mb-6">
              Reach out to our team for inquiries, project discussions, or partnering opportunities. 
              We're here to provide the expertise you need.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>contact@marvos.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <div className="bg-black p-8 rounded-none border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-gray-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-gray-600"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-gray-600"
                ></textarea>
              </div>
              <button className="w-full bg-gray-700 text-white px-6 py-3 rounded-none font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center gap-2">
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection