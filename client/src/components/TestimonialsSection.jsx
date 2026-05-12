import React from 'react'

const TestimonialCard = ({ name, role, content }) => (
  <div className="bg-gray-900 p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
    <div className="text-5xl text-gray-700 mb-4">"</div>
    <p className="text-gray-300 mb-6 italic">{content}</p>
    <div>
      <h4 className="font-bold text-white">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
)

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Strive delivers exceptional results through innovative solutions. Their team transformed our digital presence completely."
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      content: "A leader in the digital transformation space. Their expertise and dedication are unmatched in the industry."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content: "A trusted partner in corporate excellence. They've been instrumental in our growth journey."
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Trusted by industry leaders worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection