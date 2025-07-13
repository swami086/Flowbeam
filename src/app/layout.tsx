import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
// React Bricks is now handled in admin layout
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FlowBeam - AI Automation Agency",
  description: "Transform your business with cutting-edge AI automation solutions. FlowBeam helps companies streamline operations and boost productivity through intelligent automation.",
  keywords: "AI automation, business automation, artificial intelligence, workflow optimization, digital transformation",
  authors: [{ name: "FlowBeam Team" }],
  openGraph: {
    title: "FlowBeam - AI Automation Agency",
    description: "Transform your business with cutting-edge AI automation solutions",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        {process.env.NODE_ENV === 'development' && process.env.PINY_VISUAL_SELECT === 'true' && (
          <Script
            src="/_piny/piny.phone.js"
            strategy="beforeInteractive" 
          />
        )}
      </body>
    </html>
  )
}
