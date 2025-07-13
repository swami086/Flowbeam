'use client'

import { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'

interface LottieAnimationProps {
  animationData?: any
  animationUrl?: string
  className?: string
  loop?: boolean
  autoplay?: boolean
}

export default function LottieAnimation({
  animationData,
  animationUrl,
  className = '',
  loop = true,
  autoplay = true
}: LottieAnimationProps) {
  const animationRef = useRef<any>(null)
  const [fetchedAnimationData, setFetchedAnimationData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Default AI robot animation data (fallback)
  const defaultAnimationData = {
    v: "5.5.7",
    fr: 25,
    ip: 0,
    op: 125,
    w: 600,
    h: 600,
    nm: "AI Robot",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Robot",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [300, 300, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [200, 200] },
                p: { a: 0, k: [0, 0] },
                r: { a: 0, k: 20 }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.4, 0.6, 1, 1] },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ],
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      }
    ]
  }

  // Fetch animation from URL
  useEffect(() => {
    if (animationUrl && !animationData && !fetchedAnimationData) {
      setIsLoading(true)
      fetch(animationUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          return response.json()
        })
        .then(data => {
          setFetchedAnimationData(data)
          setIsLoading(false)
        })
        .catch(error => {
          console.error('Error fetching Lottie animation:', error)
          setFetchedAnimationData(defaultAnimationData)
          setIsLoading(false)
        })
    }
  }, [animationUrl, animationData, fetchedAnimationData])

  // Determine which animation data to use
  const currentAnimationData = animationData || fetchedAnimationData || defaultAnimationData

  if (isLoading) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className={className}>
      <Lottie
        animationData={currentAnimationData}
        loop={loop}
        autoplay={autoplay}
        lottieRef={animationRef}
      />
    </div>
  )
}
