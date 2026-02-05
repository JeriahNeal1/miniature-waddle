import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PhySim - AP Physics & Calculus Calculator',
  description:
    'A client-side Next.js web app that combines an advanced symbolic calculator and interactive visualizations to help students master AP Physics and AP Calculus through step-by-step, human-readable solutions.',
  keywords: ['physics', 'calculus', 'calculator', 'education', 'AP', 'math'],
  authors: [{ name: 'PhySim Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
