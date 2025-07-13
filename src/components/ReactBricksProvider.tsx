'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import config from '../../react-bricks/config'

interface ReactBricksProviderProps {
  children: React.ReactNode
}

// Dynamically import ReactBricks to avoid SSR issues
const ReactBricks = dynamic(
  () => import('react-bricks').then((mod) => mod.ReactBricks),
  { ssr: false }
)

const ReactBricksProvider = ({ children }: ReactBricksProviderProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true)
    
    // Set the app element for react-modal
    if (typeof document !== 'undefined') {
      try {
        const Modal = require('react-modal')
        Modal.setAppElement('body')
      } catch (error) {
        console.warn('Could not set react-modal app element:', error)
      }
    }
  }, [])

  // Only render ReactBricks on the client side
  if (!isClient) {
    return <>{children}</>
  }

  return (
    <ReactBricks {...config}>
      {children}
    </ReactBricks>
  )
}

export default ReactBricksProvider
