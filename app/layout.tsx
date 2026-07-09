import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'All Used Auto Parts Warehouse | Quality Salvage Parts',
  description: 'Professional auto salvage warehouse offering quality used and salvage auto parts at competitive prices. Fast shipping and expert customer service.',
  keywords: 'used auto parts, salvage parts, auto salvage, used car parts, replacement parts',
  authors: [{ name: 'All Used Auto Parts Warehouse' }],
  viewport: 'width=device-width, initial-scale=1.0',
}

export const viewport: Viewport = {
  themeColor: '#f97316',
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
