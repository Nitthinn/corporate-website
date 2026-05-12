import React from 'react'

const StatCard = ({ value, label, description }) => (
  <div className="text-center p-8 border-r border-gray-800 last:border-r-0">
    <div className="text-5xl md:text-6xl font-bold text-white mb-3">{value}</div>
    <div className="text-lg font-semibold text-gray-300 mb-2">{label}</div>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
)

const StatsSection = () => {
  const stats = [
    {
      value: "$25K",
      label: "Average ROI",
      description: "For enterprise clients"
    },
    {
      value: "500+",
      label: "Projects Completed",
      description: "Across various industries"
    },
    {
      value: "98%",
      label: "Client Retention",
      description: "Year over year"
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Dedicated team"
    }
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-gray-800">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection