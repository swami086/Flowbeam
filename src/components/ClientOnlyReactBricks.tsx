'use client'

import { ReactBricks } from 'react-bricks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import config from '../../react-bricks/config'

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
})

interface ClientOnlyReactBricksProps {
  children: React.ReactNode
}

const ClientOnlyReactBricks = ({ children }: ClientOnlyReactBricksProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
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

  // Only render ReactBricks on client side
  if (!isClient) {
    return <>{children}</>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ReactBricks {...config}>
        {children}
      </ReactBricks>
    </QueryClientProvider>
  )
}

export default ClientOnlyReactBricks
