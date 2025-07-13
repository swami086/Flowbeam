'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, GraduationCap, Wrench } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "Identify",
      description: "We help you identify high-impact AI opportunities and build a step-by-step AI Transformation strategy to bring them to life.",
      features: [
        "AI Opportunity Assessment",
        "Strategic Roadmap Development",
        "ROI Analysis & Projections",
        "Technology Stack Planning"
      ]
    },
    {
      icon: GraduationCap,
      title: "Educate",
      description: "We train and support your team with the right tools and know-how to embed AI across your entire organization.",
      features: [
        "Custom Training Programs",
        "Hands-on Workshops",
        "AI Literacy Development",
        "Change Management Support"
      ]
    },
    {
      icon: Wrench,
      title: "Develop",
      description: "We leverage our extensive experience and network to develop custom AI systems that are proven to move the needle inside your business.",
      features: [
        "Custom AI Development",
        "System Integration",
        "Performance Optimization",
        "Ongoing Support & Maintenance"
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We spend our days guiding companies through our{' '}
            <span className="gradient-text">3-step AI Transformation Journey</span>
<span className="gradient-text">3-step AI Transformation Journey</span>

          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures successful AI adoption at every stage of your transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 rounded-full hero-gradient mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
