import React from 'react'

const ServiceCard = ({ title, description }) => (
  <div className="bg-gray-900 p-8 border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300">
    <div className="w-12 h-12 bg-gray-700 mb-6"></div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
)

const ServicesSection = () => {
  const services = [
    {
      title: "Corporate Messaging & Copywriting",
      description: "Writing professional, persuasive, and consistent brand messaging for websites, campaigns, and presentations."
    },
    {
      title: "Visual Content & Creative Production",
      description: "Comprehensive evaluation of existing brand presence, performance, and alignment with corporate goals."
    },
    {
      title: "Brand Strategy & Positioning",
      description: "Data-driven planning that clarifies your company's purpose, voice, audience, and competitive positioning."
    },
    {
      title: "Market Research & Analysis",
      description: "In-depth insights into industry trends, competitor analysis, and customer preferences."
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital solutions that streamline operations and enhance customer experience."
    },
    {
      title: "Performance Marketing",
      description: "Data-driven campaigns that deliver measurable results and maximize ROI."
    }
  ]

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Professional Services</h2>
          <h3 className="text-2xl text-gray-400 mb-4">For Your Brand</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection