'use client'

import { ReactBricks } from 'react-bricks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import config from '../../../react-bricks/config'

// Create a QueryClient instance for admin pages
const adminQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
})

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
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

  // Only render on client side
  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading React Bricks...</p>
        </div>
      </div>
    )
  }

  return (
    <QueryClientProvider client={adminQueryClient}>
      <ReactBricks {...config}>
        {children}
      </ReactBricks>
    </QueryClientProvider>
  )
}
