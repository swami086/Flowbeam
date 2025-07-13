'use client'

import { Button } from '@/components/ui/button'
import LottieAnimation from '@/components/LottieAnimation'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                We don't sell AI.
                <br />
                <span className="gradient-text">We sell Results.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Your trusted partner in becoming an AI-first company. We put AI at the center of everything we do, 
                guiding companies through our proven 3-step AI Transformation Journey.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500K+</div>
                <div className="text-sm text-gray-600">Professionals upskilled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">200+</div>
                <div className="text-sm text-gray-600">AI Opportunities identified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-600">Bespoke AI solutions</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="hero-gradient text-white hover:opacity-90 transition-opacity">
                Let's Partner Up
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Content
              </Button>
            </div>
          </div>

          {/* Right Column - Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <LottieAnimation
                animationUrl="https://assets-v2.lottiefiles.com/a/42d7e7ea-118a-11ee-af72-1f4e3751989c/ZdBfPrHCP3.json"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
