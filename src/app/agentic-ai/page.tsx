'use client'

import Link from 'next/link'
import { ArrowLeft, Bot, Zap, Target, Workflow } from 'lucide-react'
import LottieAnimation from '@/components/LottieAnimation'

export default function AgenticAIPage() {

  const features = [
    {
      icon: Bot,
      title: "Autonomous Decision Making",
      description: "AI agents that can analyze data, make decisions, and execute actions without human intervention.",
      benefits: ["24/7 Operation", "Consistent Performance", "Reduced Human Error"]
    },
    {
      icon: Zap,
      title: "Real-time Adaptation",
      description: "Agents that learn and adapt to changing conditions in real-time, optimizing performance continuously.",
      benefits: ["Dynamic Optimization", "Predictive Analytics", "Proactive Problem Solving"]
    },
    {
      icon: Target,
      title: "Goal-Oriented Execution",
      description: "AI systems designed to achieve specific business objectives with measurable outcomes.",
      benefits: ["KPI-Driven Results", "ROI Optimization", "Strategic Alignment"]
    },
    {
      icon: Workflow,
      title: "Multi-Agent Orchestration",
      description: "Coordinated networks of AI agents working together to solve complex business challenges.",
      benefits: ["Scalable Solutions", "Complex Task Handling", "Seamless Integration"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Future is{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Agentic AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover how autonomous AI agents are revolutionizing business operations. 
              From decision-making to execution, witness the power of AI that thinks, 
              learns, and acts independently to drive unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Explore Solutions
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <LottieAnimation
              animationUrl="https://assets-v2.lottiefiles.com/a/42d7e7ea-118a-11ee-af72-1f4e3751989c/ZdBfPrHCP3.json"
              className="w-full h-96 bg-white rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What is Agentic AI Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <LottieAnimation
            animationUrl="https://assets-v2.lottiefiles.com/a/0a5bd8a6-116f-11ee-9649-4fa101e90f3d/vc5DvaAFer.json"
            className="w-full h-96 bg-white rounded-2xl shadow-xl order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is Agentic AI?
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Agentic AI represents the next evolution in artificial intelligence - 
                systems that can operate autonomously, make decisions, and take actions 
                to achieve specific goals without constant human oversight.
              </p>
              <p>
                Unlike traditional AI that simply responds to inputs, agentic AI systems 
                can plan, reason, and execute complex workflows. They understand context, 
                adapt to changing conditions, and continuously optimize their performance.
              </p>
              <p>
                This paradigm shift enables businesses to automate not just tasks, 
                but entire decision-making processes, leading to unprecedented efficiency 
                and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Capabilities of Agentic AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the transformative features that make agentic AI the cornerstone of modern business automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Real-World Applications
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-2 text-blue-600">Customer Service Automation</h3>
                <p className="text-gray-600">
                  AI agents that handle customer inquiries, resolve issues, and escalate complex cases autonomously.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-2 text-purple-600">Supply Chain Optimization</h3>
                <p className="text-gray-600">
                  Intelligent systems that predict demand, optimize inventory, and coordinate logistics in real-time.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-2 text-green-600">Financial Trading</h3>
                <p className="text-gray-600">
                  Autonomous trading agents that analyze markets, execute trades, and manage risk portfolios.
                </p>
              </div>
            </div>
          </div>
          <LottieAnimation
            animationUrl="https://assets-v2.lottiefiles.com/a/42d7e7ea-118a-11ee-af72-1f4e3751989c/ZdBfPrHCP3.json"
            className="w-full h-96 bg-white rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Embrace Agentic AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your business with autonomous AI agents that work around the clock
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Started Today
              </button>
            </Link>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
